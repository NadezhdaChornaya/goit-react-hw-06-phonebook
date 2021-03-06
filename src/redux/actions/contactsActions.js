import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContactActionCreator = createAction("ADD_NEW_CONTACT", data => {
    return {
        payload: { ...data, id: uuidv4() }
    }
})

export const deleteContactActionCreator = createAction("DELETE_NEW_CONTACT", e => {
    const id = e.target.dataset.id;
    return {
        payload: id
    }
})

export const filterContactsActionCreater = createAction("FILTER_CONTACT", e => {
    const { value } = e.target;
    return {
        payload: value,
    }
})

export const alertContactsActionCreater = createAction("ALERT_CONTACT")

















// export const addContactActionCreator = (data) => {
//     return {
//         type: ADDNEWCONTACT, payload: { ...data, id: uuidv4() }
//     }
// }

// export const deleteContactActionCreator = (e) => {
//     const id = e.target.dataset.id;
//     return {
//         type: DELETECONTACT, payload: id
//     }
// }

// export const filterContactsActionCreater = (e) => {
//     const { value } = e.target;
//     return {
//         type: SETFILTER, payload: value,
//     }

// }

// export const alertContactsActionCreater = (text) => {
//     return {
//         type: SETALERT, payload: text
//     }

// }