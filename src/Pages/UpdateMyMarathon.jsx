import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const UpdateMyMarathon = () => {
     const loadedData = useLoaderData()
        const navigate = useNavigate()
    //   const {_id,title,registrationStart,registrationEnd , marathonStart , location , description , photourl}  = loadedData;
      
    const [title, setTitle] = useState(loadedData.title)
    const [registrationStart, setRegistrationStart] = useState(loadedData.registrationStart)
    const [registrationEnd , setRegistrationEnd] = useState(loadedData.registrationEnd)
    const [marathonStart, setMarathonStart] = useState(loadedData.marathonStart)
    const [location, setLocation] = useState(loadedData.location)
    const [photoUrl, setPhotoUrl] = useState(loadedData.photourl)

    


     const updateMyMarathonForm = (e) => {
         e.preventDefault();

         const formData = new FormData(e.target);
         const updatedData = Object.fromEntries(formData.entries());
    
         axios.patch(`http://localhost:5000/addMarathon/${loadedData._id}`,updatedData)
         .then(res => {
               if(res.data.modifiedCount > 0){
                                 toast.success('data updated succesfully')
                                 navigate('/dashboard/myMarathonList')
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
            <main className='w-[85%] mx-auto'>
                        {/*   marathon registration form  */}

                        <div className=" bg-base-200 ">
  <div className=" ">

    <div className="  bg-base-100 py-14   shrink-0 shadow-2xl">
      <div className="w-[40%] mx-auto">
                <h1 className="text-center text-xl font-semibold common_color mb-3">Update form</h1>
        <form className="" onSubmit={updateMyMarathonForm}>

          <label className="fieldset-label">Title</label>
          <input   type="text" className="input w-full my-3" name='title' placeholder="" value={title} onChange={(e) => setTitle(e.target.value)} />

          <label className="fieldset-label">Registratin start</label>
          <input   type="date" className="input w-full my-3" name='registrationStart' placeholder="" value={registrationStart} onChange={(e) => setRegistrationStart(e.target.value)} />

          <label className="fieldset-label">Registratin End</label>
          <input   type="date" className="input w-full my-3" name='registrationEnd' placeholder="" value={registrationEnd} onChange={(e) => setRegistrationEnd(e.target.value)} />

          <label className="fieldset-label">Marathon Start</label>
          <input   type="date" className="input w-full my-3" name='marathonStart' placeholder="" value={marathonStart} onChange={(e) => setMarathonStart(e.target.value)} />

          <label className="fieldset-label">location</label>
          <input   type="text" className="input w-full my-3" name='location' placeholder="" value={location} onChange={(e) => setLocation(e.target.value)} />

          <label className="fieldset-label">Photo Url</label>
          <input   type="text" className="input w-full my-3" name='photoUrl' placeholder="" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />

        
 
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

export default UpdateMyMarathon;