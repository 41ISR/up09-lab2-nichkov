import { useState, useEffect } from "react";
import "./leftSidebar.css";
import SidebarChat from "./sidebarChat";
import SidebarUser from "./sidebarUser";
import { UsersStore, useMessageStore } from "../../../store/store";

const LeftSidebar = ({ onSelectUser }: { onSelectUser: (id: string) => void }) => {
    const [isChatsOpen, setChatsOpen] = useState(false);
    const [isContactsOpen, setContactsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<"chats" | "users">("chats")
    const [activeChats, setActiveChats] = useState<string[]>([])
    const {setUsers, users} = UsersStore()
    const { messages } = useMessageStore()

    useEffect(() => {
        console.log("Init socket");

    }, [])

    useEffect(() => {
        setActiveChats([...new Set(messages.map((msg) => msg.from && msg.to))])
    }, [messages])

    // useEffect(() => {
    //     console.log(users);
    // }, [users])

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
                    {activeChats.map((msg, index) => {
                        const user = users.find(user => user.id === msg);
                        return (
                            <SidebarChat
                                key={index}
                                onClick={() => onSelectUser(msg)}
                                message={msg}
                                socketId={user?.socketId}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="left_sidebar_contacts">
                <p onClick={toggleContacts}>Контакты</p>
                <div className={`contact_list ${isContactsOpen ? 'open' : ''}`}>
                    {users.map((user) => (
                        !activeChats.includes(user.id) && (
                            <SidebarUser
                                key={user.id}
                                socketId={user.socketId}
                                {...user}
                                onClick={() => onSelectUser(user.id)}
                            />
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;