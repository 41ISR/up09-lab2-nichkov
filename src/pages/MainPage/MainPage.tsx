import LeftSidebar from "../../components/sidebars/left_sidebar/leftSidebar";
import RightSidebar from "../../components/sidebars/right_sidebar/rightSidebar";
import { useState, useEffect } from "react";
import "./MainPage.css"
import io from "socket.io-client";
import { UsersStore, useMessageStore } from "../../store/store";
import Api from "../../api/api";

const socket = io("https://api.ktkv.dev");

const Main = () => {
  const [recipientId, setRecipientId] = useState<string>("");
  const { messages, addMessage, setMessages } = useMessageStore();
  const { user, setUsers } = UsersStore()
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      socket.emit("register", user);
      fetchMessageHistory(user);
    }

    socket.on("private_message", (data) => {
      addMessage(data);
    });

    socket.on("users", (data) => {
      setUsers(data)
    });

    return () => {
      socket.off("private_message");
      socket.off("users")
    };
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
    setSelectedUser(id);
    setRecipientId(id);
    fetchMessageHistory(user || "");
  };
  const filteredMessages = messages.filter(
    (msg) =>
      (msg.from === user && msg.to === selectedUser) ||
      (msg.from === selectedUser && msg.to === user)
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