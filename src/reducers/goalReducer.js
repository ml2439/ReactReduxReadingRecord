import C from '../actionTypes/actionTypes'

let aYearFromNow = new Date()
aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1)    // add a year to now
aYearFromNow = aYearFromNow.toLocaleDateString("en-US")

const initialState = {
    number: 25,
    deadline: aYearFromNow
}

export default function goalReducer(state=initialState, action) {
    switch(action.type) {
        case C.SET_NUMBER:
        return {
            ...state,
            number: action.number
        }

        case C.SET_DEADLINE:
        return {
            ...state,
            deadline: action.deadline
        }

        default:
        return state
    }
}
