import C from '../actionTypes/actionTypes'

const initialState = [
    {
        name: "Harry Potter",
        done: false,
        doneButton: "Done",
        id: 1
    },
    {
        name: "Wonder",
        done: false,
        doneButton: "Done",
        id: 2
    },
    {
        name: "The Captain Class",
        done: false,
        doneButton: "Done",
        id: 3
    },
    {
        name: "Carpe Diem",
        done: false,
        doneButton: "Done",
        id: 4
    },
    {
        name: "Nothing But a Circus",
        done: false,
        doneButton: "Done",
        id: 5
    },
    {
        name: "October",
        done: false,
        doneButton: "Done",
        id: 6
    }
]

export default function bookReducer(state=initialState, action) {
    switch(action.type) {
        case C.ADD_BOOK:
        const alreadyAdded = state.some(b => b.name === action.name)
        return alreadyAdded ? state : [
            ...state,
            {
                id: action.id,
                name: action.name,
                done: false,
                doneButton: "Done"
            }
        ]

        case C.REMOVE_BOOK:
        return [
            ...state.slice(0, action.index),
            ...state.slice(action.index + 1)
        ]

        case C.TOGGLE_BOOK:
        return state.map((book, index) => {
            if(index === action.index) {
                return {
                    ...book,
                    done: true,     // !book.done,
                    doneButton: "Finished on: " + (new Date()).toLocaleDateString("en-US")
                }
            }
            return book
        })

        default:
        return state
    }
}