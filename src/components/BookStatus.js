import React from 'react'
import PropTypes from 'prop-types'

// 1. pure components: pure functions; rely on props pass down to them
const BookStatus = props => {
    return (
        <div className="book-status">
            <button className="done-btn" onClick={ () => props.toggleBook(props.index) }>Done</button>
        </div>
    )
}
BookStatus.propTypes = {
    index: PropTypes.number.isRequired,
    toggleBook: PropTypes.func.isRequired,
}

export default BookStatus