import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import Dashbord from '../../Pages/Home/Dashbord/Dashbord';
import Home from '../../Pages/Home/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/dashbord',
                element: <Dashbord></Dashbord>
            }
        ]
    },
]);

export default router;