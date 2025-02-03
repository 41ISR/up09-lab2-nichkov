import LeftSidebar from "../../components/sidebars/left_sidebar/leftSidebar";
import RightSidebar from "../../components/sidebars/right_sidebar/rightSidebar";
import "./MainPage.css"
const Main =()=>{
    return(
        <div className="background_cont">
            <div className="main_page_cont">
               <LeftSidebar />
               <RightSidebar />
            </div>
        </div>
    )
}
export default Main;