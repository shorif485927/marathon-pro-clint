import React, { useContext } from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import AuthContext from '../Context/AuthContext';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const RegisterMarathonForm = () => {

              const {user} = useContext(AuthContext);
              const loadedData = useLoaderData();
              const navigate = useNavigate();
              const {setTotalRegistration} = useContext(AuthContext)
              const {_id,title,registrationStart,registrationEnd , marathonStart , location , description , photourl}  = loadedData;

        
               

           const handleMarathonRegisterForm = (e) =>{
             e.preventDefault();

             const formData = new FormData(e.target);
             const getMarathonRegisterFormData = Object.fromEntries(formData.entries())


              axios.post('http://localhost:5000/marathonRegisterForm', getMarathonRegisterFormData)
              .then(res => {
                    const data = res.data;
                    console.log(data);

                    if(data.insertedId){
                        toast.success('Register succesfully')
                            // form.reset()
                            setTotalRegistration((prevcount) => prevcount + 1)
                        navigate('/dashboard');
                    }
                    
              })
              //  .catch(err => toast.error('something is wrong'))
              
           }


    return (
        <div>

            <header  className='w-[85%] mx-auto'>
                 <Navbar></Navbar>
            </header >
            <main className='w-[85%] mx-auto'>
                        {/*   marathon registration form  */}

                        <div className=" bg-base-200 ">
  <div className=" ">

    <div className="  bg-base-100 py-14   shrink-0 shadow-2xl">
      <div className="w-[40%] mx-auto">
                <h1 className="text-center text-xl font-semibold common_color mb-3">Register form</h1>
        <form className="" onSubmit={handleMarathonRegisterForm}>
            
          <label className="fieldset-label">Email</label>
          <input   type="email" className="input w-full my-3" name='email' value={user?.email} placeholder="Email" />

          <label className="fieldset-label">Title</label>
          <input   type="text" className="input w-full my-3"  name='title' value={title} placeholder="" />


          <label className="fieldset-label">Marathon Start</label>
          <input   type="text" className="input w-full my-3" name='marathonStart' value={marathonStart} placeholder="" />


          <label className="fieldset-label">First name</label>
          <input   type="text" className="input w-full my-3" name='firstName' placeholder="Ener your first name" />

          <label className="fieldset-label">last name</label>
          <input  type="text" className="input w-full my-3" name='lastName' placeholder="enter your last name" />


          <label className="fieldset-label">contact number</label>
          <input  type="number" className="input w-full my-3" name='contactNumber' placeholder="enter contact number" />

          <label className="fieldset-label">Addition Info</label>
          <textarea  type="text" className="input w-full my-3" name='additionlInfo' placeholder="" />
 
 
          <button className="btn btn-neutral mt-4 common_bg_color text-white">Register</button>
        </form>
      </div>
    </div>
  </div>
</div>
            </main>
            <footer>
                 <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default RegisterMarathonForm;