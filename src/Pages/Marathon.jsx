import React, { useEffect, useState } from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Marathon = () => {


      const [marathonCard , setMarathonCard]  = useState([])

      useEffect(() => {
        axios('http://localhost:5000/addMarathon')
        .then(res => {
         setMarathonCard(res.data)
             
        })
      },[])
      
    return (
        <div>
              <header className=' w-[85%] mx-auto'>
                  <Navbar></Navbar>
              </header>
              <main className=' min-h-screen w-[85%] mx-auto my-14 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                         {
                            marathonCard.map(card => 
                                    // marathon card start
                <div className="card bg-base-100 w-full shadow-sm">
                <figure>
                   <img src={card.photourl} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title"> {card.title}</h2>
                    <p className='text-lg text-gray-500'> {card.description} </p>
                          
                          <div className='text-[18px]  grid gap-y-3'>
                          <p> location : <span className='text-gray-600'>{card.location}</span> </p>
                          <p> Registration Start :<span className='text-gray-600'> {card.registrationStart}</span> </p>
                          <p> Registration Ends : <span className='text-gray-600'>{card.registrationEnd}</span> </p>
                          </div>
                  <div className="card-actions justify-end my-3">
                    <Link to={`/MarathonDetails/${card?._id}`} className="btn common_bg_color text-white">See More</Link>
                  </div>
                </div>
              </div>
                          // marathon card ends 
                            )
                         }
                    </div>
              </main>
              <footer>
                  <Footer></Footer>
              </footer>
        </div>
    );
};

export default Marathon;