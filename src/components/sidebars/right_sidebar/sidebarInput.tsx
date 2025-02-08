import sendMessade from "../../../assets/send_message.png"

const SidebarInput=()=>{
    return(
        <div className="sidebar_input">
            <div className="sidebar_inputs">
                <input type="text" className="send_message_input" placeholder="Введите сообщение..." />
                <button className="send_message_submit">
                    <img src={sendMessade} className="send_message_icon"></img>
                </button>
            </div>
            
        </div>
    )
}
export default SidebarInput;