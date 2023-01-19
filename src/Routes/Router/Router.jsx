import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import Dashbord from '../../Pages/Dashbord/Dashbord';
import Home from '../../Pages/Home/Home/Home';
import StudentInfo from '../../Pages/StudentInfo/StudentInfo';
import UpdateStudent from '../../Pages/UpdateStudent/UpdateStudent';

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
            },
            {
                path: '/updateStudent/:id',
                element: <UpdateStudent></UpdateStudent>
            }
        ]
    },
]);

export default router;