import { IAppUser } from "../../../store/store";

const SidebarUser=({id}: IAppUser)=>{
    
    return(
        <div className="chat_cont">
            <div className="chat_content">{id}</div>
        </div>
    )
}
export default SidebarUser;