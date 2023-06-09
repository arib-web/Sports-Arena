import React from 'react';
import Main from '../Layout/Main';
import { createBrowserRouter } from 'react-router-dom';
import Home from "../Pages/Home/Home/Home"
import ErrorPage from '../ErrorPage/ErrorPage';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "login",
          element:<Login></Login>
        },
        {
          path: "signup",
          element:<Signup></Signup>
        }
       
      ],
    },
  ]);
  
  export default router;
  