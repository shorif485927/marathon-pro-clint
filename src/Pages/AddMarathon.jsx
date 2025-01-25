import React from 'react';

const AddMarathon = () => {


// add submit form

  const handleAddMarathonForm  = e => {
    e.preventDefault();

    
  }

    return (
            <div className=''>
      

{/* grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3 shadow-2xl p-8 w-11/12 md:w-4/8 */}
<form className=' w-[70%] mx-auto grid grid-cols-2' onSubmit={handleAddMarathonForm} >
                    
                    {/* input field */}
            <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">Marathon Title</span>
      </label>
      <input type="text" name='mtitle' placeholder=" Title" className="input input-bordered rounded-none" required />
            </div>
             

                    {/* input field */}
                    <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">Registration Start</span>
      </label>
      <input type="date" name='registrationStart' placeholder="" className="input input-bordered rounded-none"  autoComplete='email'  required />
            </div>

      
               {/* input field */}
               <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">Registration end</span>
      </label>
      <input type="date" name='registrationEnd' placeholder="" className="input input-bordered rounded-none"   required />
            </div>


          


                     {/* input field */}
                     <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">Marathon Start</span>
      </label>
      <input type="date" name='marathonStart' placeholder="" className="input input-bordered rounded-none"    required />
            </div>



                    {/* input field */}
                    <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">location</span>
      </label>
      <input type="date" name='location' placeholder="Enter Location" className="input input-bordered rounded-none" required />
            </div>


                       {/* input field */}
                      <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">Running Distance</span>
      </label>
      <select defaultValue="Pick a Runtime" className="select select-success">
  <option disabled={true}>Running Distance</option>
  <option>25k</option>
  <option>15k</option>
  <option>3k</option>
</select>

            </div>





                    {/* input field */}
                    <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">Description</span>
      </label>
      <textarea type="text" name='description' placeholder="" className="input input-bordered rounded-none" required />
            </div>



                     {/* input field */}
                     <div className="">
      <label className="label">
        <span className="label-text text-gray-400 font-semibold text-xl ">Photo Url</span>
      </label>
      <input type="text" name='photourl' placeholder="Enter Marathon Photo Url" className="input input-bordered rounded-none" required />
            </div>


                        {/* button */}
            <div className="form-control mt-6 grid grid-cols-2">
         <button className=" bg-[#22AA15] text-white w-[170px] py-3  text-white font-bold uppercase tracking-widest ">submit</button>
    
               </div>

                            {/* button */}

            </form>
            </div>
    );
};

export default AddMarathon;