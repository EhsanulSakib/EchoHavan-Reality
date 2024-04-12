import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className="w-full xl:max-w-[1600px] m-auto font-raleway text-xs md:text-sm lg:text-base">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;