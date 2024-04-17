import { FaHeart, FaComment } from "react-icons/fa";
const BlogCard = ({ blog }) => {
    const { userName, userNationality, userImage, blogTitle, description, likes, numOfComments } = blog
    return (
        <div className="w-11/12 my-4 md:my-6 lg:my-8 rounded-md shadow-lg border m-auto">
            <div className="flex flex-col md:flex-row justify-between items-center bg-slate-200 md:px-4 py-2 ">
                <div className="flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-2 ">
                    <img src={userImage} alt="user-image" className="w-32 h-32 md:w-16 md:h-16 rounded-full object-cover object-top" />
                    <div className="text-center">
                        <h1 className="font-bold text-xl">{userName}</h1>
                        <h1 className="font-medium text-base">{userNationality}</h1>
                    </div>
                </div>
                <div className="flex gap-6">
                    <h2 className="flex items-center gap-1"><FaHeart /> {likes}</h2>
                    <h2 className="flex items-center gap-1"><FaComment /> {numOfComments}</h2>
                </div>
            </div>
            <div className="pt-2 pb-4 px-4 text-justify">
                <h1 className="text-xl md:text-2xl font-semibold mb-2">{blogTitle}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;