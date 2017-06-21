import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as ActionCreators from '../actions'
import { Link } from 'react-router-dom'

// 1. logical component -- manage own state; no dependency on others
class ChangeGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: "2/11/2018"
        }
    }
    
    onNumChange = (e) => {
        const isANumber = !isNaN(parseInt(e.target.value));
        const numberToRead = isANumber ? parseInt(e.target.value) : '';
        this.props.changeGoal(numberToRead, this.state.deadline);
    }

    onDdlChange = (e) => {
        this.state.deadline = e.target.value;
        this.setState(this.state);
    }

    goBack = (e) => {
        e.preventDefault();
        this.props.history.push("/");
    }

    render() {

        const numberToRead = this.props.goal.numToRead;
        return (
            <div className="add-goal-form">
                <form onSubmit={this.goBack}>
                    <span>Read</span>
                    <input type="text" value={numberToRead} onChange={this.onNumChange} />
                    <span> books by </span>
                    <input type="text" value={this.state.deadline} onChange={this.onDdlChange} />
                    <input type="submit" value="Set Goal" />
                </form>
            </div>
        );       
    }
}

const mapStateToProps = state => {
    return {
        goal: state.goalReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeGoal: (num, ddl) => dispatch(ActionCreators.changeGoal(num, ddl))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeGoal);