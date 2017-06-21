import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ActionCreators from '../actions'
import { Link } from 'react-router-dom'
import '../stylesheets/changegoal.scss'

// 1. logical component -- manage own state; no dependency on others
class ChangeGoal extends Component {

    onNumChange = (e) => {
        const isANumber = !isNaN(parseInt(e.target.value));
        const numberToRead = isANumber ? parseInt(e.target.value) : '';
        this.props.setNumber(numberToRead);
    }

    onDdlChange = (e) => {
        this.props.setDeadline(e.target.value);
    }

    goForward = (e) => {
        e.preventDefault();
        this.props.history.push("/");
    }

    render() {

        const number = this.props.goal.number;
        const deadline = this.props.goal.deadline;

        return (
            <div className="change-goal">
                <form onSubmit={this.goForward}>
                    <div>
                        <span>Read </span>
                        <input id="input-number" type="text" value={number} onChange={this.onNumChange} />
                        <span> books by </span>
                        <input id="input-date" type="text" value={deadline} onChange={this.onDdlChange} />
                    </div>
                    <input id="button-submit" type="submit" value="Set Goal" />
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
        setNumber: number => dispatch(ActionCreators.setNumber(number)),
        setDeadline: deadline => dispatch(ActionCreators.setDeadline(deadline))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeGoal);