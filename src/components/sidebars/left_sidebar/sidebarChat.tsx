interface Props{
    message: string | undefined
    onClick:()=>void
    //message: string | undefined
}
const SidebarChat=({message,onClick}:Props)=>{
    
    return(
        <div className="chat_cont">
            <div onClick={onClick} className="chat_content" >{message}</div>
        </div>
    )
}
export default SidebarChat;