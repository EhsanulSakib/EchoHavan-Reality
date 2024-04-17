import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
    const blogs = useLoaderData()


    return (
        <div>
            <Helmet>
                <title>EchoHaven Realty | Blogs</title>
            </Helmet>
            <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6 lg:my-8">Blogs</h1>
            {
                blogs?.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Blogs;