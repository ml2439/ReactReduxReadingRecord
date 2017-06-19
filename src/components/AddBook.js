import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 1. logical component -- manage own state; no dependency on others
export default class AddBook extends Component {
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

    addBook = (e) => {
        e.preventDefault();
        this.props.addBook(this.state.name);
        this.setState({name: ""});      // Clear input box after adding a book
    }

    render() {
        return (
            <div className="add-book-form">
                <form onSubmit={this.addBook}>
                    <input type="text" value={this.state.name} onChange={this.onNameChange} />
                    <input type="submit" value="Add Book" />
                </form>
            </div>
        );
    }
}
AddBook.propTypes = {
    addBook: PropTypes.func.isRequired
}

