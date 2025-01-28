import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {

     const {newUser,setUser} = useContext(AuthContext)
     const [Error, setError] = useState('');
     const [success, setSuccess] = useState(false);
      const [showPassword, setShowPassword] = useState(false)
      const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()

        const formData = e.target;
        const name = formData.name.value;
        const photourl = formData.photourl.value;
        const email = formData.email.value;
        const password = formData.password.value;


         
         setError('');
         setSuccess(false)

         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

         if(!passwordRegex.test(password)){
           setError(' password must be at least one Uppercase, One LowerCase, One Number and Password should be in 6 Character Longer');
 
           return;
        }
         
 
         newUser(email,password)
         .then(data => {
         
           const authUser = data.user;
           setUser(authUser)
            setSuccess(true)

            navigate('/')
                 toast.success('registration succesfully',{
            autoClose: 3000,})
 
            
         })
         .catch(err => {
        
           
           toast.error(err);
           setSuccess(false)
         }
         )
 
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold my-10 capitalize">register now!</h1>
       
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                {/* form start */}
              <form className="" onSubmit={handleRegister}>

              <label className="fieldset-label">name</label>
              <input type="text" name='name' className="input" placeholder="name" />

              <label className="fieldset-label">photo</label>
              <input type="text" name='photourl' className="input" placeholder="photo url" />

                <label className="fieldset-label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

               <div className='relative'>
               <label className="fieldset-label">Password</label>
                <input type={showPassword ? 'text' : 'password'}  name='password' className="input " placeholder="Password" />
                <button  onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-3 top-7'> {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} </button>
               </div>


                <div className='my-2'>
                  {
                     
                      Error && <p className='text-red-600'>  {Error} </p>
          
                  }
                </div>
                <button className="btn btn-neutral mt-4">register</button>
              </form>
                                <div>
                                   <p>if you have an alreay accout? please <Link className='common_color' to='/login'>Log in </Link></p>
                                </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;