import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const url = "data/blog.json";
        fetch(url)
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div className="lg:col-span-2 border">
            <h3 className="text-3xl md-text-4xl font-bold">Blogs - {blogs.length}</h3>
            <div className="mt-7 grid grid-cols-1 gap-10">
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    />)
                }
            </div>
        </div>
    );
};

export default Blogs;