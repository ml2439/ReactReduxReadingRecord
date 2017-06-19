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

