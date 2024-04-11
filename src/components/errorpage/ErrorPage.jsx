import { Link } from "react-router-dom";
import { PiSmileySadFill } from "react-icons/pi";

const ErrorPage = () => {
    return (
        <div className="mt-4 lg:mt-12 flex flex-col gap-4 items-center justify-center text-center">
            <PiSmileySadFill className=" text-9xl text-yellow-400 " />
            <h2 className="text-2xl font-bold text-red-500">Opps!! Page Not Found</h2>
            <Link to="/" className=" w-1/8 rounded-lg m-auto mt-6 p-4 bg-green-500 text-white ">Go Back</Link>
        </div>
    );
};

export default ErrorPage;
