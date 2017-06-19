import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Stats from '../components/Stats'
import BookStatus from '../components/BookStatus'
import AddBook from '../components/AddBook'
import AddGoal from '../components/AddGoal'
import Book from '../components/Book'
import Header from '../components/Header'

window.React = React;

var nextId = 4; 

// container
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: props.initialBooks,
            goal: props.initialGoal
        }
    }
    onBookDone = (index) => {
        this.state.books[index].done = true;
        this.state.books[index].doneDate = (new Date()).toLocaleDateString("en-US");
        this.setState(this.state);
    }
    onRemoveBook = (index) => {
        this.state.books.splice(index, 1);
        this.setState(this.state);
    }
    onBookAdd = (name) => {
        this.state.books.push({
            name,
            done: false,
            id: nextId
        });
        this.setState(this.state);
        nextId += 1;
    }
    onGoalAdd = (num, ddl) => {
        this.state.goal = {
            numToRead: num,
            deadline: ddl
        };
        this.setState(this.state);
    }
    render() {
        return (
            <div>
                <AddGoal onAdd={this.onGoalAdd} />
                <Header title={this.props.title} books={this.state.books} goal={this.state.goal}/>
                <div className="books">
                    {this.state.books.map((b, index) => {
                        return <Book 
                            onBookDone={()=>{this.onBookDone(index)}}
                            onRemove={()=>{this.onRemoveBook(index)}}
                            name={b.name}
                            done={b.done}
                            doneDate={b.doneDate}
                            key={b.id}/>
                    })}
                </div>
                <AddBook onAdd={this.onBookAdd} />
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string,
    initialBooks: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        doneDate: PropTypes.string,
        id: PropTypes.number.isRequired
    })).isRequired,
    initialGoal: PropTypes.shape({
        numToRead: PropTypes.number.isRequired,
        deadline: PropTypes.string.isRequired
    })
}
App.defaultProps = {
    title: "Book List"
}

export default App
