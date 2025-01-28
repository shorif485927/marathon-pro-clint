import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import AuthContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';



const AddMarathon = () => {
  const {user} = useContext(AuthContext)
   const createdAt  = new Date().toLocaleDateString();
  const {totalRegistration} =  useContext(AuthContext);
  const navigate = useNavigate()
   


// add submit form
  const handleAddMarathonForm  = e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newMarathonData = Object.fromEntries(formData.entries());
    newMarathonData.Email = user.email;
    newMarathonData.RegistrationDate = createdAt



     axios.post('https://marathon-pro-server.vercel.app/addMarathon',newMarathonData)
     .then(res => {
   
        if(res.data.insertedId){
           toast.success('Data submit succesfully')
            navigate('/')
        }
      
     })

     


  }

    return (
            <div className='add_marathon_data'>
      

{/* grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3 shadow-2xl p-8 w-11/12 md:w-4/8 */}
<form className=' md:w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-3' onSubmit={handleAddMarathonForm} >
                    
                    {/* input field */}
            <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">Marathon Title</span>
      </label>
      <input type="text" name='title' placeholder=" Title" className="input input-bordered rounded-none" required />
            </div>
             

                    {/* input field */}
                    <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">Registration Start</span>
      </label>
      <input type="date" name='registrationStart' placeholder="" className="input input-bordered rounded-none"  autoComplete='email'  required />
            </div>

      
               {/* input field */}
               <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">Registration end</span>
      </label>
      <input type="date" name='registrationEnd' placeholder="" className="input input-bordered rounded-none"   required />
            </div>


          


                     {/* input field */}
                     <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">Marathon Start</span>
      </label>
      <input type="date" name='marathonStart' placeholder="" className="input input-bordered rounded-none"    required />
            </div>



                    {/* input field */}
                    <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">location</span>
      </label>
      <input type="text" name='location' placeholder="Enter Location" className="input input-bordered rounded-none" required />
            </div>


                       {/* input field */}
                      <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">Running Distance</span>
      </label>
      <select defaultValue="" className="select select-success" name='runnigDistance'>
 
  <option>25k</option>
  <option>15k</option>
  <option>3k</option>
</select>

            </div>





                    {/* input field */}
                    <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">Description</span>
      </label>
      <textarea type="text" name='description' placeholder="" className="input input-bordered rounded-none" required />
            </div>



                     {/* input field */}
                     <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">Photo Url</span>
      </label>
      <input type="text" name='photourl' placeholder="Enter Marathon Photo Url" className="input input-bordered rounded-none" required />
            </div>


                        {/* button */}
            <div className="form-control mt-6 grid grid-cols-2">
         <button type='submit' className=" bg-[#22AA15]  w-[170px] py-3  text-white font-bold uppercase tracking-widest ">submit</button>
    
               </div>

                            {/* button */}

            </form>
             <div className='ml-3 md:ml-37 capitalize font-semibold'>
                   <h1 className='my-5'> date : {createdAt} </h1>
                   <h1>  total registration : {totalRegistration} </h1>
             </div>
            </div>
    );
};

export default AddMarathon;