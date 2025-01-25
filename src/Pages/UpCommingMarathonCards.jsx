import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UpCommingMarathonCards = () => {

     const [marathonsCard , setMarathonCards] = useState([])
     console.log(marathonsCard);
     
     const {title,registrationStart,registrationEnd , marathonStart , location , description , photourl}  = marathonsCard


     useEffect(() => {
        
        axios('http://localhost:5000/addMarathon')
        .then(res => {
            
             const  data =  res.data;
             
             const upCommingMarathon = data.slice(0,6);
              setMarathonCards(upCommingMarathon)
             
        })

     } ,[])


    return (
        <div className='w-[85%] mx-auto grid grid-cols-3 gap-14 my-12'>
           {
            marathonsCard.map(card => 

                    // marathon card start
                <div className="card bg-base-100 w-full shadow-sm">
  <figure>
     <img src={card.photourl} alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> {card.title}</h2>
      <p> {card.description} </p>
    <div className="card-actions justify-end">
      <Link to={`/MarathonDetails/${card?._id}`} className="btn btn-primary">See More</Link>
    </div>
  </div>
</div>
            // marathon card ends 

            )
           }
        </div>
    );
};

export default UpCommingMarathonCards;