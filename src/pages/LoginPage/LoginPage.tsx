import "./LoginPage.css"
const Login =()=>{
    return(
        <div className="background_cont">
            <form className="login_form">
                <h2>Вход</h2>
                <label>Введите ваш ID:</label><br></br>
                <input type="text" placeholder="12345" className="login_id"></input><br></br>
                <input type="submit" value="Войти" className="login_submit"></input>
            </form>
        </div>
    )
}
export default Login;