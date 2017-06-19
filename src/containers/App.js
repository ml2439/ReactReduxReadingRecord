import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '../actions'
import Stats from '../components/Stats'
import BookStatus from '../components/BookStatus'
import AddBook from '../components/AddBook'
import AddGoal from '../components/AddGoal'
import Book from '../components/Book'
import Header from '../components/Header'

window.React = React;

// container
class App extends Component {
    render() {
        const { dispatch, books, goal, addBook, removeBook, toggleBook, addGoal } = this.props

        const bookComponent = books.map((book, index) => (
            <Book 
                index={index}
                name={book.name}
                done={book.done}
                key={book.name}
                toggleBook={toggleBook}
                removeBook={removeBook} />
        ))
        return (
            <div>
                <AddGoal addGoal={addGoal} />
                <Header title="Yearly Reading Goal" books={books} goal={goal}/>
                <div className="books">
                    { bookComponent }
                </div>
                <AddBook addBook={addBook} />
            </div>
        );
    }
}

App.propTypes = {
    books: PropTypes.array.isRequired,
    goal: PropTypes.shape({
        numToRead: PropTypes.number.isRequired,
        deadline: PropTypes.string.isRequired
    })
}

const mapStateToProps = state => ({
    books: state.bookReducer,
    goal: state.goalReducer
})

// Ensures when actioncreators are invoked, they are also dispatched
const mapDispatchToProps = dispatch => {
    return {
        addBook: (name, id) => dispatch(ActionCreators.addBook(name, id)),
        removeBook: (index) => dispatch(ActionCreators.removeBook(index)),
        toggleBook: (index) => dispatch(ActionCreators.toggleBook(index)),
        addGoal: (num, ddl) => dispatch(ActionCreators.addGoal(num, ddl))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)