import "./rightSidebar.css"
import SidebarInput from "./sidebarInput";
import SidebarText from "./sidebarUserText";
const RightSidebar =()=>{
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