interface Props {
    id: string;
    socketId: string | undefined;
    onClick: () => void;
}

const SidebarUser = ({ id, socketId, onClick }: Props) => {
    return (
        <div className="chat_cont">
            <div onClick={onClick} className="chat_content">
                <div className={socketId ? "online" : "offline"}></div>
                {id}
            </div>
        </div>
    );
}

export default SidebarUser;
