import React, { useEffect, useState } from 'react';
import img1 from '../../public/image/upc-1.jpg'
import img2 from '../../public/image/upc-2.jpg'
import img3 from '../../public/image/upc-3.jpg'
import img4 from '../../public/image/upc4.jpg'
import axios from 'axios';

const UpcommingMarathon = () => {

           const [upCommingMarathonData , setUpcommingMarthonData] = useState([])

           

           useEffect(() => {
                      axios('UpcommingMarathon.json')
                      .then(res => {
                         setUpcommingMarthonData(res.data)
                         
                      })
           } , [])
      
    return (
        <div>
            <div className="heading my-14">
                    <h1 className='text-3xl text-center font-bold'>Upcomming Marathons</h1>
                  </div> 

                  <main  className='w-[85%] mx-auto  my-12' >
                    
                      <div  className='grid grid-cols-3 gap-20 '>

                        {
                            upCommingMarathonData.map(d => 

                                <div className="card bg-base-100 full shadow-sm">
  <figure>
    <img
      className='w-full h-[200px]'
      src={d.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{d.title} </h2>
           <div className="card_cnt">
                                        <p className='my-3 text-gray-700'>{d.description} </p>
                                <p className='font-semibold'> Marathon Start : {d.startDate} </p>
                                    
           </div>

  </div>
</div>
                            )
                        }

                      </div>

                  </main>
        </div>
    );
};

export default UpcommingMarathon;