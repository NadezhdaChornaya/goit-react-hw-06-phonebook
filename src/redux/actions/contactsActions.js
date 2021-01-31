import { ADDNEWCONTACT, DELETECONTACT, SETFILTER, SETALERT } from "../types/contactsTypes"

export const addContactActionCreator = (data) => {
    return {
        type: ADDNEWCONTACT, payload: data
    }
}

export const deleteContactActionCreator = (id) => {
    return {
        type: DELETECONTACT, payload: id
    }
}

export const filterContactsActionCreater = (value) => {
    return {
        type: SETFILTER, payload: value,
    }

}

export const alertContactsActionCreater = () => {
    return {
        type: SETALERT,
    }

}