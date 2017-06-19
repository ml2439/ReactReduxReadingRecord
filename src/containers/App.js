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
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            books: [
                {
                    name: "Harry Potter",
                    done: false,
                    id: 1
                },
                {
                    name: "Australia",
                    done: false,
                    id: 2
                },
                {
                    name: "South Africa",
                    done: false,
                    id: 3
                }
            ],
            goal: {
                numToRead: 25,
                deadline: "2/11/2018"
            }
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
                <Header title="Yearly Reading Goal" books={this.state.books} goal={this.state.goal}/>
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
