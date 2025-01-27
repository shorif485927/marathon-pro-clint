import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// images

 import img1 from '../../public/image/marathon_1.jpg'
 import img2 from '../../public/image/marathon_2.jpg'
 import img3 from '../../public/image/marathon_3.jpg'

const Banner = () => {
    return (
        <div className='banner_section w-[85%] mx-auto'>
                      <Swiper
   // install Swiper modules
   modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
   spaceBetween={50}
   slidesPerView={1}
   navigation
   loop = {true}
   pagination={{ clickable: true }}
  //  scrollbar={{ draggable: true }}

    >
      <SwiperSlide>  
            <div className="flex   relative items-center">
                       <img src={img1} className='w-full h-[400px]'  alt="" />

                       <div className="banner_cnt absolute ml-20 ">
                          {/* <h1 className='text-5xl font-extrabold  common_color'>Step Into Speed Stride </h1>
                          <h1  className='text-5xl font-extrabold  common_color mt-2'>Towards Success</h1> */}
                       </div>

            </div>
           </SwiperSlide>


      <SwiperSlide>  
            <div className="flex  items-center relative">
                       <img src={img2}  className='w-full h-[400px]' alt="" />
                       <div className="banner_cnt absolute ml-20 ">
                          {/* <h1 className='text-5xl font-extrabold  common_color'> Inspiring Runners and </h1>
                          <h1  className='text-5xl font-extrabold  common_color mt-2'>   Creating Connections</h1> */}
                       </div>

            </div>
           </SwiperSlide>

           <SwiperSlide>   
            <div className="flex  items-center">
                       <img src={img3}  className='w-full h-[400px]' alt="" />

                       <div className="banner_cnt absolute ml-20 ">
                          {/* <h1 className='text-5xl font-extrabold  common_color'>Programs That Turn Goals </h1>
                          <h1  className='text-5xl font-extrabold  common_color mt-4'>into Achievements</h1> */}
                       </div>

            </div>
           </SwiperSlide>

    </Swiper>

        </div>
    );
};

export default Banner;