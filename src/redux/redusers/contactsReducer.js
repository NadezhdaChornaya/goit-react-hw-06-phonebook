import { ADDNEWCONTACT, DELETECONTACT, SETFILTER, SETALERT } from "../types/contactsTypes";

const initialState = {

    items: [],
    filter: '',
    text: '',

}

const contactsReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case ADDNEWCONTACT:
            return { ...state, items: [...state.items, action.payload] };
        case DELETECONTACT:
            return { ...state, items: [...state.items.filter((item) => item.id !== action.payload)] };
        case SETFILTER:
            return { ...state, filter: action.payload, };
        case SETALERT:
            return { ...state, text: action.payload, }

        default:
            return state;
    }
}

export default contactsReducer