import LeftSidebar from "../../components/sidebars/left_sidebar/leftSidebar";
import RightSidebar from "../../components/sidebars/right_sidebar/rightSidebar";
import { useState, useEffect } from "react";
import "./MainPage.css"
import { UsersStore, useMessageStore } from "../../store/store";
import Api from "../../api/api";


const Main = () => {
  const [recipientId, setRecipientId] = useState<string>("");
  const { messages, addMessage, setMessages } = useMessageStore();
  const { user, setUsers } = UsersStore()

  useEffect(() => {
    if (user) {
      fetchMessageHistory(user);
    }
  }, [user]);
  const fetchMessageHistory = async (id: string) => {
    try {
      const response = await Api.messages(id);
      setMessages(response);
    } catch (error) {
      console.error("Error fetching message history:", error);
    }
  };
  const handleSelectUser = (id: string) => {
    setRecipientId(id);
    fetchMessageHistory(user || "");
  };
  const filteredMessages = messages.filter(
    (msg) =>
      (msg.from === user && msg.to === recipientId) ||
      (msg.from === recipientId && msg.to === user)
  );
  return (
    <div className="background_cont">
      <div className="main_page_cont">
        <LeftSidebar onSelectUser={handleSelectUser} />
        <RightSidebar recipientId={recipientId}/>
      </div>
    </div>
  )
}
export default Main;