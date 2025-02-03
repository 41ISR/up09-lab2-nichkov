import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/LoginPage/LoginPage";
import Main from "../pages/MainPage/MainPage";

const router = createBrowserRouter([
    {
        index: true,
        element:<Login />,
    },{
        path: "/main",
        element:<Main />,
    }
])
export default router;