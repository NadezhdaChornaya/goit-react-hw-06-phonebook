import { ADDNEWCONTACT, DELETECONTACT, SETFILTER, SETALERT } from "../types/contactsTypes";

const initialState = {
    contacts: {
        items: [],
        filter: '',
        alert: false,
    }
}

const contactsReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case ADDNEWCONTACT:
            return { ...state, items: [...state.contacts.items, action.payload] };
        case DELETECONTACT:
            return { ...state, items: [...state.contacts.items.filter((item) => item.id !== action.payload)] };
        case SETFILTER:
            return { ...state, filter: action.payload, };
        case SETALERT:
            return { ...state, alert: !state.alert, }

        default:
            return state;
    }
}

export default contactsReducer