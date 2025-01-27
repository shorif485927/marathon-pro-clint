import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className=" bg-neutral text-neutral-content p-10">
 
              <div className='footer  grid grid-cols-1 justify-center  '>
              <nav className=''>
    <h6 className="footer-title text-2xl uppercase">  
      <span className='common_color'>marathon</span>
      <span className='text-white '>pro</span> 
      </h6>

      <p className='tracking-[.5px] text-[15px] text-gray-500'>"MarathonPro is your ultimate platform for managing and participating in marathon events. We connect event organizers with passionate runners, register, and track marathons seamlessly. Whether you're an experienced marathoner or a first-time participant, MarathonPro empowers you with a streamlined experience, practical resources, and expert guidance to achieve your running goals"

</p>
 
  </nav>
  <nav className='md:px-15'>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover text-[18px]">About us</a>
    <a className="link link-hover text-[18px]">Home</a>
    <a className="link link-hover text-[18px]">Marathons</a>
    <a className="link link-hover text-[18px]">Contact</a>
    <a className="link link-hover text-[18px]">Faq</a>
  </nav>
  <nav>
    <h6 className="footer-title">socail Links</h6>
        <div className='flex gap-8 text-[30px] '>
        <a className="link link-hover  hover:text-[#22AA15] "> <FaFacebook></FaFacebook> </a>
    <a className="link link-hover  hover:text-[#22AA15] ">  <FaTwitter></FaTwitter> </a>
    <a className="link link-hover  hover:text-[#22AA15] "> <FaInstagramSquare></FaInstagramSquare></a>
    <a className="link link-hover  hover:text-[#22AA15] "> <FaTelegram></FaTelegram></a>
        </div>

        <h6 className="footer-title mt-10 mb-5">Subscribe for newsletter</h6>
        <div className="join">
  <input className="input input-bordered join-item text-black" placeholder="Email" />
  <button className="btn join-item rounded-r-full ">Subscribe</button>
</div>
  </nav>

              </div>


<div className='  '>
        <hr />
<aside className='md:w-[50%] mx-auto'>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
    </div>
  
</footer>
        </div>
    );
};

export default Footer;