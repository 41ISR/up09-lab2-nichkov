import React, { useState } from 'react';
import sendMessage from "../../../assets/send_message.png";

interface Props {
    onClick: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SidebarInput = ({ onClick, onChange }: Props) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        onChange(e);
    };

    const handleSubmit = () => {
        if (inputValue.trim()) {
            onClick();
            setInputValue('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className="sidebar_input">
            <div className="sidebar_inputs">
                <input
                    type="text"
                    className="send_message_input"
                    placeholder="Введите сообщение..."
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button className="send_message_submit" onClick={handleSubmit}>
                    <img src={sendMessage} className="send_message_icon" alt="Send" />
                </button>
            </div>
        </div>
    );
};

export default SidebarInput;
