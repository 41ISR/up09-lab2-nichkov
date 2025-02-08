import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/LoginPage/LoginPage";
import Main from "../pages/MainPage/MainPage";
import { URLs } from "./URLs";
import Auth from "../pages/Auth/Auth";

const router = createBrowserRouter([
    {
        path: URLs.LOGIN,
        element: <Login />,
    }, {
        path: URLs.CHAT,
        element: <Auth />,
        children: [{
            path: URLs.CHAT,
            element: <Main />
        }]
    }
])
export default router;