import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import Dashboard from "../Pages/Dashboard";
import Marathon from "../Pages/Marathon";
import AddMarathon from "../Pages/AddMarathon";
import MyMarathonList from "../Pages/MyMarathonList";
import MyApplyList from "../Pages/MyApplyList";



  const router = createBrowserRouter([
    {
      path: "/",
      errorElement : <h1>error</h1>,
      element: <MainLayout></MainLayout>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path: '/register',
          element : <Register></Register>
        },
        {
          path : '/login',
          element : <LogIn></LogIn>
        },
        {
          path : '/dashboard',
          element : <Dashboard></Dashboard>,
          children : [
             {
              path : '/dashboard/addmarathon',
              element : <AddMarathon></AddMarathon>
             },
             {
              path : '/dashboard/myMarathonList',
              element : <MyMarathonList></MyMarathonList>
             },
             {
              path : '/dashboard/myApplyList',
              element : <MyApplyList></MyApplyList>
             }
          ]
        },
        {
          path : '/marathons',
          element : <Marathon></Marathon>
        },

        
      ]
    },
  ]);


  export default router