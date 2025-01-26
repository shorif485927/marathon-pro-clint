import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const MyApplyList = () => {
    const [myApplyData , setMyApplyData] = useState([])
    //   console.log(myApplyData);
    //   const {_id,title,registrationStart,registrationEnd , marathonStart , location , description , photourl}  = loadedData;

      
               
          useEffect(() => {
                    axios('http://localhost:5000/marathonRegisterForm')
                    .then(res => {
                                setMyApplyData(res.data)
                    })
          },[])
    return (
        <div>
                       <main>

                       <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Title</th>

        <th>Marathon Start</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>

        {
            myApplyData.map(data  => 
                <tr className="bg-base-200">
                <th> 1 </th>
                <td> {data.title}</td>
                <td> {data.title}</td>
    
                <td>{data.marathonStart} </td>
               
                <td>   <Link className='btn text-lg common_color' title='update' to='/updateMyApplyData' >  <FaEdit></FaEdit> </Link>  </td>
                <td>   <Link className='btn text-lg common_color' title='delete' >   <MdDelete></MdDelete> </Link>  </td>
              
              </tr>
            )
        }
      
    </tbody>
  </table>
</div>

                       </main>
        </div>
    );
};

export default MyApplyList;