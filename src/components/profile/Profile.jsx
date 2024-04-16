import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const { user, setUser } = useContext(AuthContext)

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        const { name, photo } = data;
        console.log(name)
        console.log(photo)

        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch()
        window.location.reload();
    }

    return (
        <div className="py-4 md:py-8">
            <h2 className="text-3xl font-bold text-center mb-4">Profile</h2>
            <div className="hero items-center md:justify-between w-11/12 m-auto bg-slate-100 rounded-lg shadow-xl">
                <div className="hero-content flex-col md:flex-row">
                    <img src={user.photoURL} className="w-44 h-44 object-cover object-top rounded-full shadow-2xl" />
                    <div>
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">{user.displayName}</h1>
                        {user.email && <p className="py-6 text-lg">{user.email}</p>}
                    </div>
                </div>
            </div>

            <div className="mt-6 p-4 w-11/12 m-auto bg-slate-100 rounded-lg shadow-xl">
                <h1 className="text-2xl font-bold text-center mb-4">Update Profile</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Update Name" className="input input-bordered" {...register("name")} defaultValue={user.displayName} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Update Photo URL" className="input input-bordered" {...register("photo")} defaultValue={user.photoURL} />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-400 hover:bg-blue-500 text-white text-lg font-bold">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Profile;