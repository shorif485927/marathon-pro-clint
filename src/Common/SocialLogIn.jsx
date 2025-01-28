import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SocialLogIn = () => {

     const {googleLogIn,setUser} = useContext(AuthContext)
      const location = useLocation();
      const navigate = useNavigate()

      const handleGoogleLogIn = () => {
        googleLogIn()
        .then(result => {
              const authUser = result.user;
              setUser(authUser)
          navigate(location.state ? location.state : '/');
          toast.success('login Succesfully')
             
        })

        .catch(err => {
          toast.error(err)             
        })
      }

      
    return (
        <div>
                        <button className="btn btn-outline " onClick={handleGoogleLogIn}>Google Log in</button>
        </div>
    );
};

export default SocialLogIn;