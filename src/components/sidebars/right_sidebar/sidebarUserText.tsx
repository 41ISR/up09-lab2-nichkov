interface MessageData{
    from: string;
    message: string;
    timestamp: string;
    currentUser:string | undefined;
}
const SidebarText =({from, message, timestamp, currentUser}:MessageData)=>{
    const isCurrentUserRecipient = currentUser === from;
    const sidebarClass = isCurrentUserRecipient ? "sidebar_text me" : "sidebar_text";
    return(
        <div className={sidebarClass} >
            <div>
                <p className="from">{from}</p>
                <p className="message">{message}</p>
                <p className="time">{timestamp}</p>
            </div>
        </div>
    )
}
export default SidebarText;
