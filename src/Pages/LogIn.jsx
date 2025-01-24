import React, { useContext, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import SocialLogIn from '../Common/SocialLogIn';

const LogIn = () => {
       const {userLogIn,setUser} = useContext(AuthContext)
       const loacation = useLocation()
       const navigate = useNavigate()
       const [showPassword, setShowPassword] = useState(false)
    //    const emailRef = useRef()

      const handleLogin = e => {
               e.preventDefault();
               const email = e.target.email.value;
               const password = e.target.password.value;
        
        
        
                 userLogIn(email,password)
                 .then(result => {
                      const authUser =  result.user
                      setUser(authUser);
                      navigate(loacation.state ? loacation.state : '/');
                    //   navigate(loacation.state ? loacation.state : '/');
                          toast.success('Log in succesfully',{
                                 autoClose: 3000,})
                 })
                 .catch(err => {
                    console.log(err);
                    
                    toast.error('log in faild')
                  
                 })
      }
    return (
            <div>
         <header className="w-[85%] mx-auto">
                         <Navbar></Navbar>
                    </header>

<div className="hero bg-base-200 min-h-screen">
             
             <div className="hero-content flex-col ">
               <div className="text-center lg:text-left">
                 <h1 className="text-5xl font-bold my-10 capitalize">Log in  now!</h1>
            
               </div>
               <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                 <div className="card-body">
                     {/* form start */}
                   <form className="" onSubmit={handleLogin}>
     
                     <label className="fieldset-label">Email</label>
                     <input type="email" name='email' className="input" placeholder="Email" />
     
                    <div className='relative'>
                    <label className="fieldset-label">Password</label>
                     <input type={showPassword ? 'text' : 'password'}  name='password' className="input " placeholder="Password" />
                     <button  onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-3 top-7'> {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} </button>
                    </div>
     
                     
     
     
                     
                     <div className='my-2'>
                       {/* {
                          
                           Error && <p className='text-red-600'>  {Error} </p>
               
                       } */}
                     </div>
                     <button className="btn btn-neutral mt-4">Log in</button>
                   </form>
                                     <div>
                                        <p>if you don't have an  account? please <Link  to='/register' className='common_color'>Register </Link></p>
                                     </div>
     
                                     <div className=''>
                                           <h1 className=' text-lg my-2.5'> or </h1>
     
                                        <SocialLogIn></SocialLogIn>
                                     </div>
                 </div>
               </div>
             </div>
           </div>


                            <footer>
                                 <Footer></Footer>
                            </footer>


            </div>
    );
};

export default LogIn;