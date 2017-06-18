import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

const BOOKS = [
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
];

const GOAL = {
    numToRead: 40,
    deadline: "2/11/2018"
};

render (
    <App initialBooks={BOOKS} initialGoal={GOAL}/>,
    document.getElementById('root')
)