import { useContext } from "react";
import { Link, Links, NavLink } from "react-router-dom";
import AuthContext from "../Context/AuthContext";


const Navbar = () => {

    const {user,logOut} = useContext(AuthContext);
     console.log(user);
     

       const links = <>

                    <li><NavLink to='/'>home</NavLink></li>
                    <li><NavLink to='/marathons'>marathons</NavLink></li>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    <li><NavLink>home</NavLink></li>
          </>
    return (
        <div className="navbar bg-base-100 my-2.5 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
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
          <p className="btn btn-ghost text-xl common_color">MARATHON <span>PRO</span> </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

  {links}
          </ul>
        </div>
        <div className="navbar-end ">

             {
               user && user.email ?  
                <div className="flex gapx]">
                      <img src={user?.photoURL} alt="" />
                     <Link to='' onClick={logOut} className='btn  mx-1.5' >Log out</Link>
               </div> 
               :

                 <div>
                             <Link to='/register' className='btn  mx-1.5' >Register</Link>
                             <Link to='/login' className='btn' >Log in</Link>
                 </div>
             }

        </div>
      </div>
    );
};
