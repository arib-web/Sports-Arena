import React from 'react';
import Main from '../Layout/Main';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        // {
        //   path: "/",
        //   element: <Home></Home>,
        // },
       
      ],
    },
  ]);
  
  export default router;
  