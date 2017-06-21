import C from '../actionTypes/actionTypes'

const initialState = {
    number: 25,
    deadline: "2/11/2018"
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
