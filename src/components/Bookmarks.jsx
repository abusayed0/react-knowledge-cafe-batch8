import SingleBookMark from "./SingleBookMark";
import SpentTime from "./SpentTime";
import PropTypes from 'prop-types';

const Bookmarks = ({bookMarks, readingTime}) => {
    return (
        <div>
            <div className="sticky top-8">
                <SpentTime  readingTime={readingTime}/>
                <div className="mt-6 bg-[rgba(17,17,17,0.05)] rounded-md p-7">
                    <h3 className="text-2xl font-bold">Bookmarked Blogs : {bookMarks.length}</h3>
                    <div className="mt-5 grid grid-cols-1 gap-4">
                        {
                            bookMarks.map((bookMark, index) => <SingleBookMark
                             key={index}
                             bookMark={bookMark}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookMarks : PropTypes.array.isRequired,
    readingTime : PropTypes.number.isRequired
}
export default Bookmarks;