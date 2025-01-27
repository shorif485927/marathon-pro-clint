import React from 'react';
import img25 from '../../public/image/istockphoto-2152835099-612x612.jpg'

const AboutUs = () => {
    return (
        <div>
              <div className="heading my-14">
                    <h1 className='text-3xl text-center font-bold'>About Us</h1>
                  </div> 

                  <main  className='w-full md:w-[85%] md:mx-auto'>
       <div className=" bg-base-200 py-14">

  <div className=" block xl:flex  gap-14 px-5 md:px-14 justify-between ">
    <img
     src={img25}
      className="  w-full md:max-w-md md:h-[250px] lg:h-[350px] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-semibold  mt-5"> welcome to <span className='uppercase common_color'>marathonpro</span> </h1>
      <p className="py-6 text-[17px]  text-gray-700">
      MarathonPro is an innovative platform that bridges the gap between event organizers and participants, making marathon management effortless. Our system offers a full-stack solution with features such as:
      </p>

      <div className='About_cnt'>

          <div className='grid grid-cols-1  md:grid-cols-2 mb-5'>
            <h1 className='font-semibold'>Event Creation: </h1>
            <p className='text-gray-700'>Organizers can create and customize marathon events with ease.</p>
          </div>

          <div className='grid grid-cols-1  md:grid-cols-2 mb-5'>
            <h1 className='font-semibold'>User-Friendly Registration:</h1>
            <p className='text-gray-700'>Participants can quickly sign up for events they love.</p>
          </div>


          <div className='grid grid-cols-1  md:grid-cols-2 mb-5'>
            <h1 className='font-semibold'>Personal Dashboards</h1>
            <p className='text-gray-700'>Both organizers and participants can manage events and registrations from a dedicated dashboard.</p>
          </div>

      </div>



    </div>
  </div>
</div>
       </main>
        </div>
    );
};

export default AboutUs;