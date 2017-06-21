import C from '../actionTypes/actionTypes'

const initialState = [
    {
        name: "Harry Potter",
        done: false,
        id: 1
    },
    {
        name: "Wonder",
        done: false,
        id: 2
    },
    {
        name: "Lolita",
        done: false,
        id: 3
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
                done: false
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
                    done: !book.done
                }
            }
            return book
        })

        default:
        return state
    }
}