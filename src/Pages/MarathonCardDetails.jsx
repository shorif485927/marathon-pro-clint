import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import img1 from '../../public/image/marathon_1.jpg'

const MarathonCardDetails = () => {
       const loadedMarathonCardData = useLoaderData();
        console.log(loadedMarathonCardData);
        const {title,registrationStart,registrationEnd , marathonStart , location , description , photourl}  = loadedMarathonCardData

        
    return (
        <div>
   
       <header className='w-[85%] mx-auto'>
              <Navbar></Navbar>
       </header>

       <main  className='w-[85%] mx-auto'>
       <div className=" bg-base-200 py-14">
  <div className=" flex justify-around ">
    <img
      src={img1}
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
                          </div>

      <Link to='/registerMarathonForm' className="btn common_bg_color text-white my-5 ">Register</Link>
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