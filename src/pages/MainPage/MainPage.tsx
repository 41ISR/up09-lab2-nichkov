import LeftSidebar from "../../components/sidebars/left_sidebar/leftSidebar";
import RightSidebar from "../../components/sidebars/right_sidebar/rightSidebar";
import { useState, useEffect } from "react";
import "./MainPage.css"
import io from "socket.io-client";
import { UsersStore } from "../../store/store";

const socket = io("https://api.ktkv.dev");

const Main =()=>{
    const [recipientId, setRecipientId] = useState<string>("");
    const {setUserId} = UsersStore()
    useEffect(() => {
        if (setUserId) {
          socket.emit("register", setUserId);
          //fetchMessageHistory(setUserId.id);
        }
    
        // socket.on("private_message", (data) => {
        //   addMessage(data);
        });
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