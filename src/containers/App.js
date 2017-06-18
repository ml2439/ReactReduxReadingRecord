import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Stats from '../components/Stats'

window.React = React;

var nextId = 4; 
const GOAL = {
    numToRead: 40,
    deadline: "2/11/2018"
};

// logical component -- manage own state; no dependency on others
class AddGoal extends Component {
    constructor() {
        super();
        this.state = {
            numToRead: GOAL.numToRead,
            deadline: GOAL.deadline
        }
    }

    onNumChange = (e) => {
        this.state.numToRead = parseInt(e.target.value);
        this.setState(this.state);
    }

    onDdlChange = (e) => {
        this.state.deadline = e.target.value;
        this.setState(this.state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.numToRead, this.state.deadline);
    }

    render() {
        return (
            <div className="add-goal-form">
                <form onSubmit={this.onSubmit}>
                    <span>Read</span>
                    <input type="text" value={this.state.numToRead} onChange={this.onNumChange} />
                    <span> books by </span>
                    <input type="text" value={this.state.deadline} onChange={this.onDdlChange} />
                    <input type="submit" value="Set Goal" />
                </form>
            </div>
        );       
    }
}
AddGoal.propTypes = {
    onAdd: PropTypes.func.isRequired
}

// logical component -- manage own state; no dependency on others
class AddBook extends Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }
    }

    onNameChange = (e) => {         
        this.setState({
            name: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name);
        this.setState({name: ""});      // Clear input box after adding a book
    }

    render() {
        return (
            <div className="add-book-form">
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.name} onChange={this.onNameChange} />
                    <input type="submit" value="Add Book" />
                </form>
            </div>
        );
    }
}
AddBook.propTypes = {
    onAdd: PropTypes.func.isRequired
}

// pure components: pure functions; rely on props pass down to them
function Header(props) {
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

// pure components: pure functions; rely on props pass down to them
function BookStatus(props) {
    return (
        <div className="book-status">
            <button className="done-btn" onClick={props.onDone}>Done</button>
            <div className="done-date">{props.date}</div>
        </div>
    )
}
BookStatus.propTypes = {
    onDone: PropTypes.func.isRequired,
    date: PropTypes.string
}

// pure component: depend on other; act as dependency to other
function Book(props) {
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
