import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";
import { FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className='border-b-4 border-green-700 bg-green-600 font-bold w-full text-lg text-white fixed top-0 z-10'>
      <div className="container mx-auto flex flex-wrap items-center justify-between p-2">
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-green-300 hover:border-green-300"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
            </svg>
          </button>
        </div>
        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <ul className="lg:flex lg:flex-grow lg:justify-start">
            <li className='block lg:inline-block lg:mt-0 py-2'>
              <Link to='/' className='pl-6 pr-8'>
                Inicio
              </Link>
            </li>
            <li className='block lg:inline-block lg:mt-0 py-2'>
              <Link to='/articles-list' className='pl-6 pr-8'>
                Artículos
              </Link>
            </li>
            <li className='block lg:inline-block lg:mt-0 py-2'>
              <Link to='/about' className='pl-6 pr-8'>
                Acerca de
              </Link>
            </li>
          </ul>
          <ul className="lg:flex lg:justify-end">
            {!user ? (
              <>
                <li className='block lg:inline-block lg:mt-0 py-2'>
                  <Link to='/login' className='pl-6 pr-8 flex items-center'>
                    <FaSignInAlt className='mr-2' /> Login
                  </Link>
                </li>
                <li className='block lg:inline-block lg:mt-0 py-2'>
                  <Link to='/register' className='pl-6 pr-8 flex items-center'>
                    <FaUserPlus className='mr-2' /> Registro
                  </Link>
                </li>
              </>
            ) : (
              <li className='block lg:inline-block lg:mt-0 py-2'>
                <button onClick={logout} className='pl-6 pr-8 flex items-center'>
                  <FaSignOutAlt className='mr-2' /> Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
