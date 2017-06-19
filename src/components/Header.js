import React from 'react'
import PropTypes from 'prop-types'
import Stats from './Stats'

// 2. pure components: pure functions
const Header = props => {
    return (
        <div className="header">
            {props.title}
            <Stats books={props.books} goal={props.goal}/>
        </div>
    );
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    goal: PropTypes.shape({
        numToRead: PropTypes.number.isRequired,
        deadline: PropTypes.string.isRequired
    })
}

export default Header