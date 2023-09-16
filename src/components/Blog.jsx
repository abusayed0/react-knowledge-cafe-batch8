import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookMarks}) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <article>
            {/* cover  */}
            <img className="w-full h-[450px]" src={cover} alt={`Cover of ${title}`} />
            <div className="mt-8 mb-4 flex justify-between items-center">
                <div className="flex gap-6 items-center">
                    <img className="h-14 w-14 rounded-full" src={author_img} alt="" />
                    <div>
                        <p className="text-2xl font-bold">{author}</p>
                        <p className="font-semibold">{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <p className="font-medium text-xl">{`${reading_time < 10 ? "0" : ""}${reading_time} min read`}</p>
                    <FaBookmark onClick={() => handleAddToBookMarks(blog)} className="text-2xl text-[#6047EC] cursor-pointer"></FaBookmark>
                </div>
            </div>
            <h3 className="text-3xl font-bold">{title}</h3>
            <div className="mt-4 mb-7 flex gap-4 font-medium text-xl">
                {
                    hashtags.map((tag, index) => <a  key={index}>#{tag}</a>)
                }
            </div>
            <button className="mb-8 text-[#6047EC] text-xl font-semibold underline">Mark as read</button>
        </article>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMarks : PropTypes.func.isRequired
}
export default Blog;