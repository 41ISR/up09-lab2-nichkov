import LeftSidebar from "../../components/sidebars/left_sidebar/leftSidebar";
import RightSidebar from "../../components/sidebars/right_sidebar/rightSidebar";
import { useState, useEffect } from "react";
import "./MainPage.css"
import io from "socket.io-client";
import { UsersStore, useMessageStore } from "../../store/store";
import Api from "../../api/api";

const socket = io("https://api.ktkv.dev");

const Main =()=>{
    const [recipientId, setRecipientId] = useState<string>("");
    const { messages, addMessage, setMessages } = useMessageStore();
    const {setUserId, user} = UsersStore()

    useEffect(() => {
        if (user) {
          socket.emit("register", user);
          fetchMessageHistory(user);
        }
    
        socket.on("private_message", (data) => {
           addMessage(data);
        });
    
        return () => {
          socket.off("private_message");
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
    return(
        <div className="background_cont">
            <div className="main_page_cont">
               <LeftSidebar />
               <RightSidebar />
            </div>
        </div>
    )
}
export default Main;