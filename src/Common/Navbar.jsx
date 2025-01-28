import { useContext } from "react";
import { Link, Links, NavLink } from "react-router-dom";
import AuthContext from "../Context/AuthContext";


const Navbar = () => {

    const {user,logOut} = useContext(AuthContext);
   
     

       const links = <>

                    <li><NavLink to='/'>home</NavLink></li>
                    <li><NavLink to='/marathons'>marathons</NavLink></li>
                    <li><NavLink className={user ? 'block' : 'hidden'} to='/dashboard'>Dashboard</NavLink></li>
    
          </>
    return (
        <div className="navbar bg-base-100 py-8 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                    {links}
            </ul>
          </div>
          <p className="btn btn-ghost text-xl common_color hidden md:block">MARATHON <span>PRO</span> </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

  {links}
          </ul>
        </div>
        <div className="navbar-end ">

             {
               user && user.email ?  
                <div className="flex gap-x-1.5 items-center">
                      <img src={user?.photoURL} className="w-[40px] rounded-full hidden md:block" alt="" />
                     <Link to='' onClick={logOut} className='btn  mx-2.5' >Log out</Link>
               </div> 
               :

                 <div className="flex mr-4">
                             <Link to='/register' className='btn  mx-1.5' >Register</Link>
                             <Link to='/login' className='btn' >Log in</Link>
                 </div>
             }

        </div>
      </div>
    );
};

export default Navbar;