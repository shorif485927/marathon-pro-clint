import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import { toast } from 'react-toastify';


const MarathonCardDetails = () => {
       const loadedMarathonCardData = useLoaderData();
      

        const {_id,title,registrationStart,registrationEnd , marathonStart , location , description , photourl,runnigDistance}  = loadedMarathonCardData;

        // const [currentDate, setCurrentDate] = useState(new Date());
        // const [campaignDeadline, setDedline] = useState(new Date(Deadline))
        const [dedline, setDedline] = useState(true)
        console.log(dedline);
        
        const [currentDate, setCurrentDate] = useState(new Date())
        const [marathonDedline , setMarathonDedline] = useState(new Date(registrationEnd));
       
                 useEffect(() => {
                  if(currentDate > marathonDedline){
                    setDedline(false)
              }else{
                setDedline(true)
              }
                 },[])

                 
                 const handleDesabledbutton = () => {
                        if(!dedline){
                          toast.error('Dedline is over ')
                          return;
                        }
                 }

        
    return (
        <div>
   
       <header className='w-[85%] mx-auto'>
              <Navbar></Navbar>
       </header>

       <main  className='w-[85%] mx-auto'>
       <div className=" bg-base-200 py-14">
  <div className=" flex justify-around ">
    <img
      src={photourl}
      className="max-w-md rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{title} </h1>
      <p className="py-6">
                {description}
      </p>

      <div className='text-[18px]  grid gap-y-3'>
                          <p> location : <span className='text-gray-600'>{location}</span> </p>
                          <p> Registration Start :<span className='text-gray-600'> {registrationStart}</span> </p>
                          <p> Registration Ends : <span className='text-gray-600'>{registrationEnd}</span> </p>
                          <p> Marathon Starts : <span className='text-gray-600'>{marathonStart}</span> </p>
                          <p> Running Distance : <span className='text-gray-600'>{runnigDistance}</span> </p>
                          </div>

                   <div>
                      {
                        !dedline ? <div className="btn my-5 bg-gray-700 text-white" onClick={handleDesabledbutton}>Register</div> :

                        <Link to={`/registerMarathonForm/${_id}`} className='btn common_bg_color text-white my-5'>Register</Link>
                      }
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

export default MarathonCardDetails;