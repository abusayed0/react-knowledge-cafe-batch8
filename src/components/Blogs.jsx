import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const url = "data/blog.json";
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[]);
    return (
        <div className="lg:col-span-2 border">
            <h3 className="text-2xl md-text-3xl font-bold">Blogs - {blogs.length}</h3>
            
        </div>
    );
};

export default Blogs;