import { useMessageStore, UsersStore } from "../../../store/store";
import "./rightSidebar.css"
import SidebarInput from "./sidebarInput";
import SidebarText from "./sidebarUserText";
import { useState, useEffect } from "react";
interface Messages{
    recipientId:string
}
const RightSidebar =({recipientId} : Messages)=>{
    const [message, setMessage] = useState<string>("");
    const {addMessage} = useMessageStore();
    const { user } = UsersStore()
    const handleSendMessage = () => {
        if (recipientId && message) {
          const timestamp = new Date().toISOString();
          //socket.emit("private_message", { to: recipientId, message, timestamp });
          addMessage({ from: user || "me", to: recipientId, message, timestamp });
          setMessage("");
        }
      };
    return(
        <div className="right_sidebar">
            <div className="messages">
                <SidebarText />
                <SidebarText />
            </div>
            <SidebarInput />
        </div>
    )
}
export default RightSidebar;