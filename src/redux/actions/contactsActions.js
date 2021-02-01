import { v4 as uuidv4 } from 'uuid';
import { ADDNEWCONTACT, DELETECONTACT, SETFILTER, SETALERT } from "../types/contactsTypes"

export const addContactActionCreator = (data) => {
    return {
        type: ADDNEWCONTACT, payload: { ...data, id: uuidv4() }
    }
}

export const deleteContactActionCreator = (e) => {
    const id = e.target.dataset.id;
    return {
        type: DELETECONTACT, payload: id
    }
}

export const filterContactsActionCreater = (e) => {
    const { value } = e.target;
    return {
        type: SETFILTER, payload: value,
    }

}

export const alertContactsActionCreater = (text) => {
    return {
        type: SETALERT, payload: text
    }

}