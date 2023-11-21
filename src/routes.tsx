import { createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login";
import App from "./App";
import { Register } from "./Components/Login/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />
    },
]);

export default router;