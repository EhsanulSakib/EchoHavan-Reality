import { Link, NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import logo from '../../../../public/logo.png'
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const notify = () => toast.error("User Signed Out!");

    const handleSignOut = () => {
        logOut()
            .then(notify)
            .catch()
    }

    const links = <>
        <ul className={`md:flex duration-300 top-12 absolute md:static ${open ? 'left-0' : '-left-60'} bg-blue-300 md:bg-inherit p-10 md:p-0 shadow-lg md:shadow-none no-underline gap-6 text-base text-white z-10`}>
            <li className="pb-2 md:pb-0"><NavLink to='/'>Home</NavLink></li>
            <li className="pb-2 md:pb-0"><NavLink to='/about'>About</NavLink></li>
            {
                user ?
                    <li><NavLink to='/profile'>Profile</NavLink></li>
                    :
                    ""
            }
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
                    {
                        user ?
                            <img src={user.photoURL} alt="" className="w-[40px] h-[40px] rounded-full" />
                            :
                            <FaUserCircle className="text-4xl text-white" />

                    }
                </div>

                <div>
                    {
                        user ?
                            <button className=" bg-slate-200 py-2 px-3 text-black rounded-md text-sm lg:text-base" onClick={handleSignOut}>Sign Out</button>
                            :
                            <Link to='/login' className=" bg-slate-200 py-2 px-3 text-black rounded-md text-sm lg:text-base">Login</Link>

                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;