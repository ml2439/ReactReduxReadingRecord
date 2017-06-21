import React from 'react'
import PropTypes from 'prop-types'
import BookStatus from './BookStatus'

// 2. pure component: depend on other
const Book = props => {
    return (
        <div className="book">
            <div className="book-name">
                <a className="remove-book" onClick={ () => props.removeBook(props.index) }>✖</a>
                {props.name}
            </div>
            <BookStatus 
                index={props.index} 
                toggleBook={props.toggleBook}
                doneButton={props.doneButton}
            />
        </div>
    );
}
Book.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
    toggleBook: PropTypes.func.isRequired,
    removeBook: PropTypes.func.isRequired,
    doneButton: PropTypes.string.isRequired
}

export default Book