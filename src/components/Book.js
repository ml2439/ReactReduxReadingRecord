import React from 'react'
import PropTypes from 'prop-types'
import BookStatus from './BookStatus'

// 2. pure component: depend on other
const Book = props => {
    return (
        <div className="book">
            <div className="book-name">
                <a className="remove-book" onClick={props.onRemove}>x</a>
                {props.name}
            </div>
            <BookStatus onDone={props.onBookDone} date={props.doneDate}/>
        </div>
    );
}
Book.propTypes = {
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    doneDate: PropTypes.string,
    onBookDone: PropTypes.func,
    onRemove: PropTypes.func
}

export default Book