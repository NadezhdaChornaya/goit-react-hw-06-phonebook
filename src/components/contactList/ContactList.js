import React from 'react';
import PropTypes from "prop-types";
import { TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { Div } from './styledList';
import transition from 'styled-transition-group';

const LI = transition.li.attrs({
    mountOnEnter: true,
    unmountOnExit: true,
    timeout: 250,
})`
&:enter{transform: translateX(-200%);}
&:enter-active{
    transform: translateX(0);
	transition: all 250ms linear;
}
&:exit{transform: transform: translateX(0);}
&:exit-active{
    transform: translateX(200%);
	transition: all 250ms linear;
}
`

const ContactList = ({ items, contacts, deleteContact }) => {
    return (
        <Div>
            <TransitionGroup component="ul" className="contactList wrapper">
                {items.map(({ id, name, number }) => {
                    return (
                        // <CSSTransition
                        //     key={id}
                        //     timeout={250}
                        //     classNames="contactItemFade">
                        <LI key={id} timeout={250} className="itemContact">
                            {`${name}:  ${number}`}
                            <button className="button" type="button" data-id={id} onClick={deleteContact}>Delete</button>
                        </LI>
                        // </CSSTransition>
                    )
                })}

            </TransitionGroup >
        </Div>
    )
}

const mapStateToPerops = (state) => {
    return {
        items: state.contacts.items,
    }
}

export default connect(mapStateToPerops)(ContactList)

ContactList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
}