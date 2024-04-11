import { Link, NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import logo from '../../../../public/favicon.png'

const Navbar = () => {
    const [open, setOpen] = useState(false)


    const links = <>
        <ul className={`md:flex duration-300 top-12 absolute md:static ${open ? 'left-0' : '-left-60'} bg-blue-300 md:bg-inherit p-10 md:p-0 shadow-lg md:shadow-none no-underline gap-6 text-base text-white`}>
            <li className="pb-2 md:pb-0"><NavLink to='/'>Home</NavLink></li>
            <li className="pb-2 md:pb-0"><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/career'>Career</NavLink></li>
        </ul>
    </>


    return (
        <nav className="flex items-center px-2 md:px-4 py-1 md:py-4 justify-between text-xl bg-blue-400 font-medium ">
            <div className="flex items-center md:hidden">
                <div className="md:hidden" onClick={() => setOpen(!open)}>
                    {
                        open == true ? <IoMdClose className="text-2xl text-white" /> : <RiMenu2Line className="text-2xl text-white" />
                    }
                </div>

                <div className="logo flex text-base md:hidden items-center">
                    <img src={logo} alt="" className="w-10" />
                    <h2 className="font-semibold text-xl text-white">EchoHaven Realty</h2>
                </div>
            </div>

            <div className="logo hidden md:flex items-center ">
                <img src={logo} alt="" className="w-8 md:w-10" />
                <h2 className="font-semibold text-2xl text-white">EchoHaven Realty</h2>
            </div>

            <div className="md:pr-16">
                {links}
            </div>


            <div className="flex gap-1 items-center">
                <div>
                    <FaUserCircle className="text-4xl" />
                </div>

                <div>
                    <Link to='/login' className=" bg-slate-200 py-2 px-3 text-black rounded-md text-base">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;