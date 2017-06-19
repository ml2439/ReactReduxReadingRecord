import C from '../actionTypes/actionTypes'

const initialState = [
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
]

let nextId = 4

export default function Book(state=initialState, action) {
    switch(action.type) {
        case C.ADD_BOOK:
        return [
            ...state,
            {
                name: action.name,
                done: false,
                id: nextId++
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

/****************************
onBookDone = (index) => {
    this.state.books[index].done = true;
    this.state.books[index].doneDate = (new Date()).toLocaleDateString("en-US");
    this.setState(this.state);
}
onBookRemove = (index) => {
    this.state.books.splice(index, 1);
    this.setState(this.state);
}
onBookAdd = (name) => {
    this.state.books.push({
        name,
        done: false,
        id: nextId
    });
    this.setState(this.state);
    nextId += 1;
}
*****************************/