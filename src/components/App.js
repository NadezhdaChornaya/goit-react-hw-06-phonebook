import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { PhonebookWrapper } from './styledApp';




const App = ({ contacts }) => {
    const [state, setState] = useState({
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    });

    return (

        <PhonebookWrapper>
            <CSSTransition
                in={true}
                appear={true}
                classNames="titleSlide"
                timeout={500}
                unmountOnExit
            >
                <h1 className="mainTitle">Phonebook</h1>
            </CSSTransition>
            <ContactForm />
            <h2 className="title">Contacts</h2>

            <CSSTransition
                in={state.contacts.length > 1}
                classNames="filterSlide"
                timeout={500}
                unmountOnExit>
                <Filter />
            </CSSTransition>

            {/* {state.contacts.length > 0 && (<CSSTransition
                in={true}
                appear={true}
                classNames="titleSlide"
                timeout={500}
                unmountOnExit> */}
            <ContactList contacts={contacts} />
            {/* </CSSTransition>)} */}

        </PhonebookWrapper >

    )
}

export default App


