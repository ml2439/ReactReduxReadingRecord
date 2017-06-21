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

export const changeGoal = (num, ddl) => ({
    type: C.CHANGE_GOAL,
    num,
    ddl
})