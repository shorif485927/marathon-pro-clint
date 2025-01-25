import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const RegisterMarathonForm = () => {
    return (
        <div>

            <header  className='w-[85%] mx-auto'>
                 <Navbar></Navbar>
            </header >
            <main className='w-[85%] mx-auto'>
                        {/*   marathon registration form  */}

                        <div className=" bg-base-200 ">
  <div className=" ">

    <div className="  bg-base-100 py-14   shrink-0 shadow-2xl">
      <div className="w-[40%] mx-auto">
        <fieldset className="">
            
          <label className="fieldset-label">Email</label>
          <input   type="email" className="input w-full my-3" placeholder="Email" />

          <label className="fieldset-label">Title</label>
          <input   type="email" className="input w-full my-3" placeholder="Email" />


          <label className="fieldset-label">Marathon Start</label>
          <input   type="email" className="input w-full my-3" placeholder="Email" />


          <label className="fieldset-label">First name</label>
          <input   type="email" className="input w-full my-3" placeholder="Email" />

          <label className="fieldset-label">last name</label>
          <input  type="email" className="input w-full" placeholder="Email" />


          <label className="fieldset-label">contact number</label>
          <input  type="email" className="input w-full" placeholder="Email" />

          <label className="fieldset-label">Addition Info</label>
          <textarea  type="email" className="input w-full" placeholder="Email" />
 
 
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
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

export default RegisterMarathonForm;