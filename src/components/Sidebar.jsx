import { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars, FaTimes } from "react-icons/fa";
import { BiSolidCog, BiSolidDashboard, BiSolidDetail, BiSolidReport, BiGroup, BiUser, BiUserPlus, BiLockAlt, BiTable, BiBox, BiBell,  } from "react-icons/bi";


const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='fixed top-0 z-5 w-screen h-18 bg-gradient-to-r from-blue-900 to-blue-500 text-blue-200 lg:h-screen lg:w-40 lg:text-left'>
        <div className="flex flex-row justify-between items-center gap-5 lg:flex-col lg:justify-start lg:items-start">
            <div className="px-3 py-3.5 flex flex-row justify-center items-center gap-2 lg:border-b-1 border-white lg:w-full">
                <img src="./images/author.jpg" alt="Author" className="rounded-full" />
                <p className="text-center text-xs font-medium">Antonio Sala<span className="block text-xs leading-3 font-light">Web Developer</span></p>
            </div>
            <div className="pr-5 lg:hidden">
                <button className="text-white pt-1" onClick={handleMenu}>
                    {!isMenuOpen ? (
                        <FaBars className="fas fa-bars text-white text-2xl" />
                    ) : (
                        <FaTimes className="fas fa-times text-white text-2xl" />
                    )}
                </button>
            </div>
            <ul className='hidden text-sm lg:pt-2 xl:text-lg lg:flex lg:flex-col lg:justify-start lg:items-start gap-4 px-4 font-light'>
                <li className='flex justify-start items-center gap-1 text-left'>
                    <BiSolidDashboard />
                    <Link smooth 
                        to="/#" 
                    >
                        Dashboard
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiGroup />
                    <Link smooth 
                        to="/" 
                    >
                        Customers
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiBox />
                    <Link smooth 
                        to="/" 
                    >
                        Products
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiUser />
                    <Link smooth 
                        to="/" 
                    >
                        Account
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiLockAlt />
                    <Link smooth 
                        to="/" 
                    >
                        Login
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiUserPlus />
                    <Link smooth 
                        to="/" 
                    >
                        Register
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiBell />
                    <Link smooth 
                        to="/" 
                    >
                        Notifications
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiSolidCog />
                    <Link smooth 
                        to="/" 
                        className="px-2"
                    >
                        Settings
                    </Link>
                </li>
            </ul>
        </div>
        {isMenuOpen ? (
            <ul className="bg-blue-300 text-blue-900 text-sm pb-5 px-5 py-2 flex flex-col justify-start items-start gap-5 lg:hidden menuOpen">
                <li className='flex justify-start items-center gap-1 my-1'>
                    <BiSolidDashboard className="text-blue-900" />
                    <Link smooth 
                        to="/#"
                    >
                        Dashboard
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiGroup />
                    <Link smooth 
                        to="/" 
                    >
                        Customers
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiBox />
                    <Link smooth 
                        to="/" 
                    >
                        Products
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiUser />
                    <Link smooth 
                        to="/" 
                    >
                        Account
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiLockAlt />
                    <Link smooth 
                        to="/" 
                    >
                        Login
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiUserPlus />
                    <Link smooth 
                        to="/" 
                    >
                        Register
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiBell />
                    <Link smooth 
                        to="/" 
                    >
                        Notifications
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiSolidCog />
                    <Link smooth 
                        to="/" 
                        className="px-2"
                    >
                        Settings
                    </Link>
                </li>
            </ul>
      ) : null}
    </div>
  )
}

export default Sidebar;