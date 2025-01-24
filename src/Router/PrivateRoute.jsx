import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
     const {user,loading} = useContext(AuthContext)
      const loacation = useLocation()


 
             if(user) {
                 return children
             }

             if(loading){
                return <Loading></Loading>
             }

             return   <Navigate state={location.pathname} to='/login'></Navigate>



};

export default PrivateRoute;