import React from 'react';
import { useLoaderData } from 'react-router-dom';
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
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex ">
    <img
      src={img1}
      className="max-w-md rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{title} </h1>
      <p className="py-6">
                {description}
      </p>
      <button className="btn btn-primary">Get Started</button>
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