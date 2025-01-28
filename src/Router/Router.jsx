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
import MarathonCardDetails from "../Pages/MarathonCardDetails";
import RegisterMarathonForm from "../Pages/RegisterMarathonForm";
import UpdateMyApplyData from "../Pages/UpdateMyApplyData";
import UpdateMyMarathon from "../Pages/UpdateMyMarathon";
import PrivateRoute from "./PrivateRoute";



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
              path : '/dashboard',
              element :   <PrivateRoute>
                <AddMarathon></AddMarathon>
              </PrivateRoute>
             },
             {
              path : '/dashboard/myMarathonList',
              element :  <PrivateRoute>
                <MyMarathonList></MyMarathonList>
              </PrivateRoute>,
       
             },
             {
              path : '/dashboard/myApplyList',
              element :  <PrivateRoute>
                 <MyApplyList></MyApplyList>
              </PrivateRoute>
             }
       
          ]
        },
        {
          path : '/marathons',
          element : <Marathon></Marathon>
        },
        {
          path : '/MarathonDetails/:id',
          element  :  <PrivateRoute>
            <MarathonCardDetails></MarathonCardDetails>
          </PrivateRoute> ,
          loader : ({params}) => fetch(`http://localhost:5000/addMarathon/${params.id}`)
        },
        {
           path : '/registerMarathonForm/:id',
           element : <RegisterMarathonForm></RegisterMarathonForm>,
           loader : ({params}) => fetch(`http://localhost:5000/addMarathon/${params.id}`)
        },
        {
          path : '/updateMyApplyData/:id',
          element : <UpdateMyApplyData></UpdateMyApplyData>,
           loader : ({params}) => fetch(`http://localhost:5000/marathonRegisterForm/${params.id}`)
         },
          {
            path : '/updateMyMarathon/:id',
            element : <UpdateMyMarathon></UpdateMyMarathon>,
            loader : ({params}) =>fetch(`http://localhost:5000/addMarathon/${params.id}`)
          }


        
      ]
    },
  ]);


  export default router