import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateMyApplyData = () => {

     const loadedData = useLoaderData();
     const navigate = useNavigate()
    //  const {_id,lastName,firstName,contactNumber,additionlInfo} = loadedUpdetedData;

    const [firstName, setFirstName] = useState(loadedData.firstName);
          const [lastName, setLastname] = useState(loadedData.lastName);
          const [contactNumber, setContactNumber] = useState(loadedData.contactNumber);
          const [additionInfo, setAdditionlInfo] = useState(loadedData.additionInfo);
     

      const updateMyApplyList = (e) => {
            e.preventDefault();

            const formData = new FormData(e.target);
            const updatedData = Object.fromEntries(formData.entries());

            axios.patch(`http://localhost:5000/marathonRegisterForm/${loadedData?._id}`,updatedData)
            .then(res => {
                  console.log(res.data);
                  if(res.data.modifiedCount > 0){
                      toast.success('data updated succesfully')
                      navigate('/dashboard/myApplyList')
                  }
                  
            })
            .catch(err => {
                console.log(err);
                
            })

      }

    return (
        <div>
             <header>
                <Navbar></Navbar>
             </header>
             <main className='md:w-[85%] mx-auto  my-20'>
                        {/*   marathon registration form  */}

                        <div className=" bg-base-200 ">
  <div className=" ">

    <div className="  bg-base-100 py-14   shrink-0 shadow-2xl">
      <div className=" w-full md:w-[70%] lg:w-[40%] mx-auto px-8">
                <h1 className="text-center text-xl font-semibold common_color mb-3">Update Your Applied Data</h1>
        <form className="" onSubmit={updateMyApplyList}>

          <label className="fieldset-label">First name</label>
          <input   type="text" className="input w-full my-3" name='firstName' placeholder="Ener your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

          <label className="fieldset-label">last name</label>
          <input  type="text" className="input w-full my-3" name='lastName' placeholder="enter your last name" value={lastName} onChange={(e) => setLastname(e.target.value)} />


          <label className="fieldset-label">contact number</label>
          <input  type="number" className="input w-full my-3" name='contactNumber' placeholder="enter contact number" value={contactNumber}  onChange={(e) => setContactNumber(e.target.value)} />

          <label className="fieldset-label">Additional Info</label>
          <textarea  type="text" className="input w-full my-3" name='additionlInfo' placeholder="" value={additionInfo}  onChange={(e) => setAdditionlInfo(e.target.value)} />
 
 
          <button className="btn btn-neutral mt-4 common_bg_color text-white">Update</button>
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

export default UpdateMyApplyData;