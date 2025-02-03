import React, { useState } from "react";
import "./leftSidebar.css";
import SidebarChat from "./sidebarChat";

const LeftSidebar = () => {
    const [isChatsOpen, setChatsOpen] = useState(false);
    const [isContactsOpen, setContactsOpen] = useState(false);

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
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                </div>
            </div>
            <div className="left_sidebar_contacts">
                <p onClick={toggleContacts}>Контакты</p>
                <div className={`contact_list ${isContactsOpen ? 'open' : ''}`}>
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
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
