import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <ul className="text-center lg:flex-grow lg:flex lg:justify-center">
            <li className='block lg:inline-block lg:mt-0 py-2'>
              <Link to='/' className='pl-6 pr-8'>
                Inicio
              </Link>
            </li>
            <li className='block lg:inline-block lg:mt-0 py-2'>
              <Link to='/articles-list' className='pl-6 pr-8'>
                Articulos
              </Link>
            </li>
            <li className='block lg:inline-block lg:mt-0 py-2'>
              <Link to='/about' className='pl-6 pr-8'>
                Acerca de
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
