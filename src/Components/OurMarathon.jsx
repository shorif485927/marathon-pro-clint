import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OurMarathon = () => {

     const [marathonsCard , setMarathonCards] = useState([])

     
     const {title,registrationStart,registrationEnd , marathonStart , location , description , photourl,RegistrationData}  = marathonsCard


     useEffect(() => {
        
        axios('http://localhost:5000/addMarathon')
        .then(res => {
            
             const  data =  res.data;
             
             const upCommingMarathon = data.slice(0,6);
              setMarathonCards(upCommingMarathon)
             
        })

     } ,[])


    return (
                <div>

<div className="heading my-14">
                    <h1 className='text-3xl text-center font-bold'>Our Marathon</h1>
                  </div> 
<div className='w-[85%] mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-14 my-12'>


           {
            marathonsCard.map(card => 

                    // marathon card start
                <div className="card bg-base-100 w-full shadow-sm">
  <figure>
     <img
        className='w-full h-[200px]'
        src={card.photourl} alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> {card.title}</h2>
                <div className='capitalize text-md'>
                <p> location : {card.location} </p>
                <p> marathon start: {card.marathonStart} </p>
                </div>
    <div className="card-actions justify-end">
      <Link to={`/MarathonDetails/${card?._id}`} className="btn common_bg_color text-white">See Details</Link>
    </div>
  </div>
</div>
            // marathon card ends 

            )
           }
        </div>

                </div>
    );
};

export default OurMarathon;