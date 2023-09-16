import PropTypes from 'prop-types';


const SpentTime = ({readingTime}) => {
    
    return (
        <div className="px-10 py-5 bg-[rgba(96,71,236,0.10)] rounded-lg">
            <h2 className="font-bold text-2xl text-[#6047EC]">Spent time on read : {readingTime} min</h2>
        </div>
    );
};
SpentTime.propTypes = {
    readingTime : PropTypes.number.isRequired
};
export default SpentTime;