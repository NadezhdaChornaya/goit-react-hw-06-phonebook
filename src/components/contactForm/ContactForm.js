import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from "prop-types";
import { FormWrapper } from './styledForm';
import { connect } from 'react-redux';
import { addContactActionCreator, alertContactsActionCreater } from '../../redux/actions/contactsActions';
import Notification from '../notifications/Notification'
// import { addContactActionCreator } from '../../redux/redusers/contactsReducer'


const ContactForm = ({ contacts, text, addContactActionCreator, alertContactsActionCreater }) => {
    const [state, setState] = useState({
        name: '',
        number: '',
    });
    useEffect(() => {
        if (text) {
            setTimeout(() => { alertContactsActionCreater('') }, 2000)
        }
    }, [text, alertContactsActionCreater])

    const hadlleSubmit = e => {
        e.preventDefault();
        if (!state.name.length) {
            alertContactsActionCreater('Please, enter your name')
        }
        else if (!state.number.length) {
            alertContactsActionCreater('Please, enter your number')
        }
        else {
            if (contacts.some((contact) =>
                contact.name.toLowerCase() === state.name.toLowerCase())) {

                alertContactsActionCreater(`${state.name} is already in contacts.`)
            }
            else {
                addContactActionCreator({ ...state })
            }
        }

        setState({
            name: '',
            number: '',
        })
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prev => ({
            ...prev, [name]: value
        }))
    }

    return (
        <>
            {text &&
                <CSSTransition
                    in={true}
                    classNames="alertSlide"
                    timeout={500}
                    unmountOnExit
                >
                    <Notification text={text} />
                </CSSTransition>}

            <FormWrapper className="wrapper" onSubmit={hadlleSubmit}>
                <label className="label">Name
                     <input className="input" type="text" name="name" value={state.name} onChange={handleChange}></input>
                </label>
                <label className="label">Number
                     <input className="input" type="tel" name="number" value={state.number} onChange={handleChange}></input>
                </label>
                <div className="buttonWrapper">
                    <button className="button" type="submit">Add contact</button>
                </div>
            </FormWrapper>

        </>
    )
}


const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.items,
        text: state.contacts.text,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        alertContactsActionCreater: (data) => {
            dispatch(alertContactsActionCreater(data))
        },
        addContactActionCreator: (data) => {
            dispatch(addContactActionCreator(data))
        },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
    addContactActionCreator: PropTypes.func.isRequired,
    alertContactsActionCreater: PropTypes.func.isRequired,
}
