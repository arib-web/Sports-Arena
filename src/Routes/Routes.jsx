import React from 'react';
import Main from '../Layout/Main';
import { createBrowserRouter } from 'react-router-dom';
import Home from "../Pages/Home/Home/Home"
import ErrorPage from '../ErrorPage/ErrorPage';
import Login from '../Login/Login';

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

        }
       
      ],
    },
  ]);
  
  export default router;
  