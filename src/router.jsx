import { createBrowserRouter } from "react-router-dom";
import { SignUp, Signin } from "./pages";
import DefaultLayout from "./components/layouts/DefaultLayout";
import GuestsLayout from "./components/layouts/GuestsLayout";
import App from "./App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/home',
                element: <App/>
            },
        ]
        
    },
    {
        path: '/',
        element: <GuestsLayout/>,
        children: [
            {
                path: '/sign-in',
                element: <Signin/>
            },
            {
                path: '/sign-up',
                element: <SignUp/>,
            }
        ]

    }
 
]);

export default router;


