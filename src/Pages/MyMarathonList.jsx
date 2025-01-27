import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import Swal from 'sweetalert2';
import AuthContext from '../Context/AuthContext';

const MyMarathonList = () => {
                const {user} = useContext(AuthContext)
             
                const [myMarathonData , setMyMarathonData] = useState([])

                
                // const {_id,title,registrationStart,registrationEnd , marathonStart , location , description , photourl,runnigDistance}  = loadedData;

             

                   useEffect(()=>{
                       axios('http://localhost:5000/addMarathon')
                        .then(res => {
                            const marathonData = res.data;
                            const filterdData = marathonData.filter(d => d.Email == user.email)
                            setMyMarathonData(filterdData)
                        })
                        .catch(err => console.log(err))},[])
           
               
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
                      
                                      fetch(`http://localhost:5000/addMarathon/${id}`,{
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
                                                 const deletedData = myMarathonData.filter(d => d._id !== id)
                                                 setMyMarathonData(deletedData)
                                      
                                        
                                              
                                          })
                                     
                                    }
                                  });
                    
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
                    myMarathonData.map((data,index) => 
                        <tr>
                    <th>{index + 1} </th>
                    <td>{data.title} </td>
                    <td>{data.location} </td>
                    <td>{data.marathonStart} </td>
                    <td>{data.runnigDistance} </td>
                    <td>   <Link className='btn text-lg common_color' title='update' to={`/updateMyMarathon/${data._id}`} >  <FaEdit></FaEdit> </Link>  </td>
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