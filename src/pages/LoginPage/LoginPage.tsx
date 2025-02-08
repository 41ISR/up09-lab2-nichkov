import Input from "../../components/LoginInput";
import "./LoginPage.css"
import { useState, useEffect } from "react";
import {UsersStore} from "../../store/store";
import { useNavigate } from "react-router-dom";
import { URLs } from "../../router/URLs";
const Login =()=>{
    const [idValue, setIdValue]= useState("")
    const {setUserId} = UsersStore()
    const navigate = useNavigate()

    const handleClick = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const res = idValue.trim();
        setUserId(res);
    }

    useEffect(()=>{
        console.log(idValue)
    },[idValue])
    
    const goToMainPage = () => {
        navigate(URLs.CHAT);
    };
    return(
        <div className="background_cont">
            <form className="login_form" onSubmit={handleClick}>
                <h2>Вход</h2>
                <label>Введите ваш ID:</label><br/>
                <Input value={idValue} setValue={setIdValue}/>
                <button type="submit" className="login_submit"
                onClick={goToMainPage}
                >Войти</button>
            </form>
        </div>
    )
}
export default Login;