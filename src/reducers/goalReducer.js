import C from '../actionTypes/actionTypes'

const initialState = {
    numToRead: 25,
    deadline: "2/11/2018"
}
export default function goalReducer(state=initialState, action) {
    switch(action.type) {
        case C.ADD_GOAL:
        return {
            numToRead: action.num,
            deadline: action.ddl
        }

        default:
        return state
    }
}


// onGoalAdd = (num, ddl) => {
//     this.state.goal = {
//         numToRead: num,
//         deadline: ddl
//     };
//     this.setState(this.state);
// }
