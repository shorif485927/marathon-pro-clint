import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import AuthContext from '../Context/AuthContext';


// https://ibb.co.com/kDFBbGX
// https://ibb.co.com/wLq3ydx
// https://ibb.co.com/QJqw3cG
// https://ibb.co.com/ysX94hM
// https://ibb.co.com/3cKHJhh
// https://ibb.co.com/MG912mT




const AddMarathon = () => {
   const createdAt  = new Date().toLocaleDateString();
  //  const registrationCount = 0;
  const {totalRegistration} =  useContext(AuthContext);
   


// add submit form
  const handleAddMarathonForm  = e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newMarathonData = Object.fromEntries(formData.entries());

     console.log(newMarathonData);

     axios.post('http://localhost:5000/addMarathon',newMarathonData)
     .then(res => {
      console.log(res.data);
        if(res.data.insertedId){
           toast.success('Data submit succesfully')
            form.reset
        }
      
     })
    //  .catch(err => toast.error('something is wrong'))
    //  .catch(err => console.log(err)
    //  )
     


  }

    return (
            <div className=''>
      

{/* grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3 shadow-2xl p-8 w-11/12 md:w-4/8 */}
<form className=' w-[70%] mx-auto grid grid-cols-2' onSubmit={handleAddMarathonForm} >
                    
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
      <select defaultValue="Pick a Runtime" className="select select-success">
  <option disabled={true}>Running Distance</option>
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
             <div className='ml-37'>
                   <h1 className='my-5'> date : {createdAt} </h1>
                   <h1>  total registration : {totalRegistration} </h1>
             </div>
            </div>
    );
};

export default AddMarathon;