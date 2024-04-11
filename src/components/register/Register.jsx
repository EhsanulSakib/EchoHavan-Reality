import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm()


    const onSubmit = (data) => {
        const { name, photo, email, password } = data;

        console.log(name)
        console.log(photo)
        console.log(email)
        console.log(password)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className=" bg-slate-100 h-screen flex items-center justify-center">
            <div className="flex gap-4 rounded-xl flex-col items-center justify-center w-11/12 md:w-1/2 m-auto py-4 md:py-8 lg:py-12 bg-white shadow-md">
                <h2 className="text-2xl">Please Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 md:w-3/4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" {...register("name")} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter photo link" className="input input-bordered" {...register("photo")} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your Email" className="input input-bordered" {...register("email")} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" {...register("password")} />
                        <label className="label">
                            <div className="flex gap-2">
                                <input type="checkbox" required name="terms" id="terms" />
                                <p>Accept <Link className="font-bold no-underline text-black">Term & Conditions</Link></p>
                            </div>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-400 hover:bg-blue-500 text-white text-lg font-bold">Register</button>
                    </div>
                </form>
                <div>
                    <p>Already have any account? <Link to='/login' className="no-underline text-blue-400 hover:text-blue-500 font-bold">Login Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;