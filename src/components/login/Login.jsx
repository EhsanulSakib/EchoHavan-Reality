import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { signIn } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const notify = () => toast.success("Successfully Logged In");
    const location = useLocation()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        const { email, password } = data;

        signIn(email, password)
            .then(result => {
                navigate(location?.state ? location.state : '/')
            }
            )
            .then(notify)
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className=" bg-slate-100 h-screen flex items-center justify-center">
            <div className="flex gap-4 rounded-xl flex-col items-center justify-center w-11/12 md:w-1/2 m-auto py-4 md:py-8 lg:py-12 bg-white shadow-md">
                <h2 className="text-2xl font-semibold">Please Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 md:w-3/4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered" {...register("email")} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" {...register("password")} />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-400 hover:bg-blue-500 text-white text-lg font-bold">Login</button>
                    </div>
                </form>
                <div>
                    <p>Does not have any account? <Link to='/register' className="no-underline text-blue-400 hover:text-blue-500 font-bold">Register Now</Link></p>
                </div>
            </div>
        </div>
    )
};

export default Login;