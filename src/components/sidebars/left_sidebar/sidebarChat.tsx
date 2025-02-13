interface Props{
    key: number | undefined
    message: string | undefined
    //message: string | undefined
}
const SidebarChat=({key, message}:Props)=>{
    
    return(
        <div className="chat_cont">
            <div className="chat_content" key={key}>{message}</div>
        </div>
    )
}
export default SidebarChat;