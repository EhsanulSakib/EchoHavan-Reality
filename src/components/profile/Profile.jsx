import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2> Profile</h2>
            <h2>{user.userName}</h2>
        </div>
    );
};

export default Profile;