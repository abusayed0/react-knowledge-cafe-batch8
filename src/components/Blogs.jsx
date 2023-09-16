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
        <div>
            <h3>Blogs Component</h3>
            
        </div>
    );
};

export default Blogs;