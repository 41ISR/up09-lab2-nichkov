import React from "react";
interface Props{
    key: string | undefined
    user: string | undefined
}
const SidebarChat=({key, user}:Props)=>{
    
    return(
        <div className="chat_cont">
            <div className="chat_content" key={key}>{user}</div>
        </div>
    )
}
export default SidebarChat;