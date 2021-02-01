import React from 'react'
import PropTypes from "prop-types";
import { FilterWrapper } from './styledFilter'
import { filterContactsActionCreater } from '../../redux/actions/contactsActions';
import { connect } from 'react-redux';

const Filter = ({ filter, filterContactsActionCreater }) => {
    return (

        <FilterWrapper className="wrapper">
            <h3 className="titleFilter">Find contacts by name</h3>
            <input name="filter" type="text" className="input" placeholder="Search..." value={filter} onChange={filterContactsActionCreater}></input>
        </FilterWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        filter: state.contacts.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        filterContactsActionCreater: (data) => {
            dispatch(filterContactsActionCreater(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

Filter.propTypes = {
    filterContactsActionCreater: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
}
