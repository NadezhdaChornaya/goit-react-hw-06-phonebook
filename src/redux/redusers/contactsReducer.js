import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import { addContactActionCreator, deleteContactActionCreator, filterContactsActionCreater, alertContactsActionCreater } from '../actions/contactsActions';

// const addContact = (state, action) => {
//     return [...state, action.payload.contact]
// }

// const deleteContact = (state, action) => {
//     return {
//         ...state, items: [...state.items.filter((item) => item.id !== action.payload)]
//     }
// }

// const filterContact = (state, action) => { return { ...state, filter: action.payload, } }

// const alertContact = (state, action) => { return { ...state, text: action.payload, } }

// const items = createReducer([], {
//     [addContactActionCreator]: addContact,
//     [deleteContactActionCreator]: deleteContact,
// })

// const filter = createReducer('', {
//     [filterContactsActionCreater]: filterContact,
// })

// const text = createReducer('', {
//     [alertContactsActionCreater]: alertContact,
// })

const contactsReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case addContactActionCreator.type:
            return { ...state, items: [...state.items, action.payload] };
        case deleteContactActionCreator.type:
            return { ...state, items: [...state.items.filter((item) => item.id !== action.payload)] };
        case filterContactsActionCreater.type:
            return { ...state, filter: action.payload, };
        case alertContactsActionCreater.type:
            return { ...state, text: action.payload, }

        default:
            return state;
    }
}

const initialState = {
    items: [],
    filter: '',
    text: '',
}

// export default combineReducers({
//     items,
//     filter,
//     text,
// })

export default contactsReducer