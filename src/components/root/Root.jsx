import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className="w-full xl:max-w-[1600px] m-auto font-raleway text-sm md:text-base lg:text-lg text-medium">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;