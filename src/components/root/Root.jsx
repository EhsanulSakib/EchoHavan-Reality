import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import Footer from "../shared/footer/Footer";
const Root = () => {
    return (
        <div className="bg-gray-100  w-full xl:max-w-[1600px] m-auto font-montserrat text-sm md:text-base lg:text-lg text-medium">

            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default Root;