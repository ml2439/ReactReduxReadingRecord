import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 1. logical component -- manage own state; no dependency on others
export default class AddGoal extends Component {
    constructor() {
        super();
        this.state = {
            numToRead: 25,
            deadline: "2/11/2018"
        }
    }

    onNumChange = (e) => {
        const isANumber = !isNaN(parseInt(e.target.value));
        this.state.numToRead = isANumber ? parseInt(e.target.value) : '';
        this.setState(this.state);
    }

    onDdlChange = (e) => {
        this.state.deadline = e.target.value;
        this.setState(this.state);
    }

    addGoal = (e) => {
        e.preventDefault();
        this.props.addGoal(this.state.numToRead, this.state.deadline);
    }

    render() {
        return (
            <div className="add-goal-form">
                <form onSubmit={this.addGoal}>
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
    addGoal: PropTypes.func.isRequired
}
