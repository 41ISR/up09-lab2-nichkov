import { Outlet, useNavigate } from "react-router"
import { UsersStore } from "../../store/store"
import { useEffect } from "react"
import { URLs } from "../../router/URLs"

const Auth = () => {
    const {user} = UsersStore()
    const navigate = useNavigate()

    useEffect(() => {
        if(!user){
            navigate(URLs.LOGIN);
        }
    }, [navigate, user])
    
    return (
        <Outlet />
    )
}

export default Auth