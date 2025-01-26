import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MyMarathonList = () => {
                const loadedData = useLoaderData();
                // const [myMarathonData , setMyMarathonData] = useState([])
                const {_id,title,registrationStart,registrationEnd , marathonStart , location , description , photourl,runnigDistance}  = loadedData;


                // delete 
                const handleDelete = id => {
                    
                }
                
    return (
              <div>
               
               <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>title</th>
        <th>location</th>
        <th>marathon start</th>
        <th>Running Distance</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>

                {
                    loadedData.map((data,index) => 
                        <tr>
                    <th>{index + 1} </th>
                    <td>{data.title} </td>
                    <td>{data.location} </td>
                    <td>{data.marathonStart} </td>
                    <td>{data.runnigDistance} </td>
                    <td>   <Link className='btn text-lg common_color' title='update' to={`/updateMyApplyData/${data._id}`} >  <FaEdit></FaEdit> </Link>  </td>
                <td>   <Link className='btn text-lg common_color' title='delete' onClick={() => handleDelete(data._id)} >   <MdDelete></MdDelete> </Link>  </td>
              
              
                  </tr>)
                }
     
   
    </tbody>
  </table>
</div>

        </div>
          
              </div>
    );
};

export default MyMarathonList;