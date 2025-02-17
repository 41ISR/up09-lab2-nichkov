import sendMessade from "../../../assets/send_message.png"
interface Props{
    onClick:()=>void
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SidebarInput=({onChange, onClick}:Props)=>{
    return(
        <div className="sidebar_input">
            <div className="sidebar_inputs">
                <input onChange={onChange} type="text" className="send_message_input" placeholder="Введите сообщение..." />
                <button className="send_message_submit" onClick={onClick}>
                    <img src={sendMessade} className="send_message_icon"></img>
                </button>
            </div>
            
        </div>
    )
}
export default SidebarInput;