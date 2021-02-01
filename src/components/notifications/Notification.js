import React from 'react';
import PropTypes from "prop-types";
import { AlertWrapper } from './styledNotification';
import { connect } from 'react-redux';

const Notification = ({ text }) => {
    return (
        <AlertWrapper>
            <p className="alertText">&#10071;{text}&#10071;</p>
        </AlertWrapper>
    )
}




export default Notification

Notification.propTypes = {
    text: PropTypes.string.isRequired,
}