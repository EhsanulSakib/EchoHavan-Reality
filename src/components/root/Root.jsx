import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

const Root = () => {
    return (
        <div className="w-full xl:max-w-6xl m-auto font-raleway text-xs md:text-sm lg:text-base">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;