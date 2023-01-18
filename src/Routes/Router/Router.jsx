import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import Dashbord from '../../Pages/Dashbord/Dashbord';
import Home from '../../Pages/Home/Home/Home';
import StudentInfo from '../../Pages/StudentInfo/StudentInfo';

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
            },
            {
                path: '/student/:sid',
                element: <StudentInfo></StudentInfo>
            }
        ]
    },
]);

export default router;