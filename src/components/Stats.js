import React from 'react'
import PropTypes from 'prop-types'

// 1. pure components: pure functions; rely on props pass down to them
const Stats = props => {
    let booksDone = props.books.filter(b => b.done).length;
    const GOALNUM = props.goal.number;
    let percentToRead = Math.trunc((GOALNUM-booksDone)/GOALNUM * 100) + '%';

    const MSPERDAY = 1000 * 60 * 60 * 24; 
    const GOALdate = new Date(props.goal.deadline);
    let timeDiff = GOALdate.getTime() - Date.now();
    let daysLeft = Math.ceil(timeDiff / MSPERDAY);
    let percentTimeLeft = Math.trunc((daysLeft / 365) * 100) + '%';

    let daysPerBook = Math.ceil(daysLeft / (GOALNUM-booksDone));

    return (
        <div className="stats">
            Goal: {GOALNUM}, Finished: {booksDone}
            <div>{percentToRead} books left</div>
            <div>{percentTimeLeft} days left</div>
            <div>Read 1 book per {daysPerBook} days to achieve your goal!</div>
        </div>
    );
}
Stats.propTypes = {
    books: PropTypes.array.isRequired,
    goal: PropTypes.shape({
        number: PropTypes.number.isRequired,
        deadline: PropTypes.string.isRequired
    })
}

export default Stats