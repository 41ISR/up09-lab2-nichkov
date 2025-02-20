import { useMessageStore, UsersStore } from "../../../store/store";
import "./rightSidebar.css"
import SidebarInput from "./sidebarInput";
import SidebarText from "./sidebarUserText";
import { useState, useEffect } from "react";
import io from "socket.io-client";
interface Messages{
    recipientId:string
}
const socket = io("https://api.ktkv.dev");
const RightSidebar =({recipientId}:Messages)=>{
    const { messages, addMessage, setMessages } = useMessageStore();
    const { user, setUsers } = UsersStore()
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        if (user) {
          socket.emit("register", user);
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

      const filteredMessages = messages.filter(
        (msg) =>
          (msg.from === user && msg.to === recipientId) ||
          (msg.from === recipientId && msg.to === user)
      );
    const handleSendMessage = () => {
        console.log(recipientId);
        console.log(message);
        if (recipientId && message) {
            
          const timestamp = new Date().toISOString();
          socket.emit("private_message", { to: recipientId, message, timestamp });
          addMessage({ from: user || "me", to: recipientId, message, timestamp });
          setMessage("");
        }
      };
    return(
        <div className="right_sidebar">
            <div className="messages">
                <div className="current_user">{recipientId ? `Чат с ${recipientId}` : "Нет активных чатов"}</div>
                {filteredMessages.map((msg, index) => (
                    <SidebarText key={index} from={msg.from} timestamp={new Date(msg.timestamp).toLocaleTimeString()} message={msg.message}  currentUser={user}/>
                ))}
                
            </div>
            <SidebarInput onClick={handleSendMessage} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}/>
        </div>
    )
}
export default RightSidebar;