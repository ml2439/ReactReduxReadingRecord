import React from 'react'
import PropTypes from 'prop-types'
import Stats from './Stats'
import '../stylesheets/header.scss'

// 2. pure components: pure functions
const Header = props => {
    return (
        <div className="header">
            <div id="title">{props.title}</div>
            <Stats books={props.books} goal={props.goal}/>
        </div>
    );
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    goal: PropTypes.shape({
        number: PropTypes.number.isRequired,
        deadline: PropTypes.string.isRequired
    })
}

export default Header