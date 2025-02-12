import React, { useState, useEffect } from "react";
import "./leftSidebar.css";
import SidebarChat from "./sidebarChat";
import io from "socket.io-client"
import { UsersStore } from "../../../store/store";

const socket = io("https://api.ktkv.dev", {
    withCredentials: true,
    transports: ["websocket", "polling"],
})

const LeftSidebar = () => {
    const [isChatsOpen, setChatsOpen] = useState(false);
    const [isContactsOpen, setContactsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<"chats" | "users">("chats")
    const [activeChats, setActiveChats] = useState<string[]>([])
    const {setUsers, users} = UsersStore()
    //const { messages } = useMessageStore()

    useEffect(() => {
        console.log("Init socket");
        
        socket.on("users", (newUsers) => {
            
            setUsers(newUsers)
        })

        return () => {
            socket.off("users")
        }
    }, [])

useEffect(() => {
    console.log(users);

}, [users])

    const toggleChats = () => {
        setChatsOpen(!isChatsOpen);
    };

    const toggleContacts = () => {
        setContactsOpen(!isContactsOpen);
    };

    return (
        <div className="left_sidebar">
            <div className="left_sidebar_chats">
                <p onClick={toggleChats}>Чаты</p>
                <div className={`chat_list ${isChatsOpen ? 'open' : ''}`}>

                </div>
            </div>
            <div className="left_sidebar_contacts">
                <p onClick={toggleContacts}>Контакты</p>
                <div className={`contact_list ${isContactsOpen ? 'open' : ''}`}>
                    {users.map((user) => (
                        <SidebarChat
                            key={user.socketId} 
                            user={user.id}
                            //onClick={() => onSelectUser(user.id)}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;


// import React, { useState, useRef } from "react";
// import "./leftSidebar.css";
// import SidebarChat from "./sidebarChat";

// const LeftSidebar = () => {
//     const [isChatsOpen, setChatsOpen] = useState(false);
//     const [isContactsOpen, setContactsOpen] = useState(false);
//     const chatsRef = useRef(null);
//     const contactsRef = useRef(null);

//     const toggleChats = () => {
//         setChatsOpen(!isChatsOpen);
//     };

//     const toggleContacts = () => {
//         setContactsOpen(!isContactsOpen);
//     };

//     return (
//         <div className="left_sidebar">
//             <div className="left_sidebar_chats">
//                 <p onClick={toggleChats}>Чаты</p>
//                 <div
//                     ref={chatsRef}
//                     className={`chat_list ${isChatsOpen ? 'open' : ''}`}
//                     style={{ height: isChatsOpen ? `${chatsRef.current.scrollHeight}px` : '0px' }}
//                 >
//                     <SidebarChat />
//                     <SidebarChat />
//                     <SidebarChat />
//                     <SidebarChat />
//                 </div>
//             </div>
//             <div className="left_sidebar_contacts">
//                 <p onClick={toggleContacts}>Контакты</p>
//                 <div
//                     ref={contactsRef}
//                     className={`contact_list ${isContactsOpen ? 'open' : ''}`}
//                     style={{ height: isContactsOpen ? `${contactsRef.current.scrollHeight}px` : '0px' }}
//                 >
//                     <SidebarChat />
//                     <SidebarChat />
//                     <SidebarChat />
//                     <SidebarChat />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LeftSidebar;
