interface Props{
    message: string | undefined
    onClick:()=>void
    socketId: string | undefined;
}
const SidebarChat=({message,onClick, socketId}:Props)=>{
    
    return(
        <div className="chat_cont">
            <div onClick={onClick} className="chat_content" >
                <div className={socketId ? "online" : "offline"}></div>
                {message}
            </div>
        </div>
    )
}
export default SidebarChat;