import PropTypes from 'prop-types';
const SingleBookMark = ({bookMark}) => {
    const {title} = bookMark;
    return (
        <div className="p-5 rounded-md bg-white">
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
    );
};
SingleBookMark.propTypes = {
    bookMark : PropTypes.object.isRequired
};
export default SingleBookMark;