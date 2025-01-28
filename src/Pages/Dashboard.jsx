import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import { NavLink, Outlet } from 'react-router-dom';
import AddMarathon from './AddMarathon';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <header>
                 <Navbar></Navbar>
            </header>



           <article className='w-[90%] mx-auto block sm:flex gap-x-8 my-20'>
              <aside className='mb-14'>
                 <div className="dashboard_route_links">
                       <ul>
                        <li> <NavLink className='btn w-[200px] my-1' to='/dashboard'>Add Marathon</NavLink> </li>
                        <li> <NavLink className='btn w-[200px] my-1' to='/dashboard/myMarathonList'>My Marathon List</NavLink> </li>
                        <li> <NavLink className='btn w-[200px] my-1' to='/dashboard/myApplyList'>My Apply List</NavLink> </li>
                 
                       </ul>
                 </div>
              </aside>

              <main className='w-full'>
                
                            <Outlet></Outlet>
              </main>
           </article>





                       <footer>
                                  <Footer></Footer>
                            </footer>

        </div>
    );
};

export default Dashboard;