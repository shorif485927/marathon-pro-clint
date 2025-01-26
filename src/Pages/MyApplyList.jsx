import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

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

        //   
        const handleDelete = id => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
  
                  fetch(`http://localhost:5000/marathonRegisterForm/${id}`,{
                      method : 'DELETE'
                  })
  
                  .then(res => res.json())
                      .then(data => {
                
  
                          if(data.deletedCount > 0 ){
                               Swal.fire({
                    title: "Deleted!",
                    text: "Your data has been deleted.",
                    icon: "success"
                  });
                          }
                            const deletedData = myApplyData.filter(d => d._id !== id);
                            setMyApplyData(deletedData)
                    
                          
                      })
                 
                }
              });
              

        }


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
            myApplyData.map((data,index)  => 
                <tr className="bg-base-200" key={data._id}>
                <th> {index + 1} </th>
                <td> {data.firstName}</td>
                <td> {data.title}</td>
    
                <td>{data.marathonStart} </td>
               
                <td>   <Link className='btn text-lg common_color' title='update' to={`/updateMyApplyData/${data._id}`} >  <FaEdit></FaEdit> </Link>  </td>
                <td>   <Link className='btn text-lg common_color' title='delete' onClick={() => handleDelete(data._id)} >   <MdDelete></MdDelete> </Link>  </td>
              
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