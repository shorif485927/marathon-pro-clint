import axios from 'axios';
import React, { useEffect, useState } from 'react';

const OurCoach = () => {
             const [coach, setCoach] = useState([])

               

             useEffect(() => {
                  axios('Coaches.json')
                  .then(res => setCoach(res.data))
             },[])
    return (
        <div>

              <div className="heading my-14">
                    <h1 className='text-3xl text-center font-bold'>Our Coaches</h1>
                  </div> 

                  <main  className='w-[85%] mx-auto  mb-14'>
                            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-12'>
                                 {
                                    coach.map(d => 
                                        <div className="card bg-base-100 w-full shadow-sm">
                                        <figure>
                                          <img className='w-full h-[220px]'
                                            src={d.img}
                                            alt="Shoes" />
                                        </figure>
                                        <div className="card-body">
                                          <h2 className="card-title">{d.name} </h2>
                                                <p>{d.title} </p>
                                  
                                        </div>
                                      </div>
                                    )
                                 }
                            </div>
                  </main>
            
        </div>
    );
};

export default OurCoach;