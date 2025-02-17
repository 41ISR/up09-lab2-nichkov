interface Props{
    id:string
    onClick:()=>void
}
const SidebarUser=({id, onClick}: Props)=>{
    return(
        <div className="chat_cont">
            <div onClick={onClick} className="chat_content">{id}</div>
        </div>
    )
}
export default SidebarUser;