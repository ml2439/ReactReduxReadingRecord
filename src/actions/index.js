import C from '../actionTypes/actionTypes'

let nextId = 4

export const addBook = (name, id) => ({
    type: C.ADD_BOOK,
    name,
    id: nextId++
})

export const removeBook = index => ({
    type: C.REMOVE_BOOK,
    index
})

export const toggleBook = index => ({
    type: C.TOGGLE_BOOK,
    index
})

export const addGoal = (num, ddl) => ({
    type: C.ADD_GOAL,
    num,
    ddl
})