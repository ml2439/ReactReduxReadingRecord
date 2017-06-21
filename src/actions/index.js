import C from '../actionTypes/actionTypes'

let nextId = 7

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

export const setNumber = number => ({
    type: C.SET_NUMBER,
    number
})

export const setDeadline = deadline => ({
    type: C.SET_DEADLINE,
    deadline
})

