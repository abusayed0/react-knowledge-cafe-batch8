import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookMarks}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const url = "data/blog.json";
        fetch(url)
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div className="lg:col-span-2">
            <h3 className="text-3xl md-text-4xl font-bold">Blogs - {blogs.length}</h3>
            <div className="mt-7 grid grid-cols-1 gap-10">
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookMarks={handleAddToBookMarks}
                    />)
                }
            </div>
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookMarks : PropTypes.func.isRequired
};
export default Blogs;