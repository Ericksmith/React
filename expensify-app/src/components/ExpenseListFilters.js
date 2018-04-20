import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value))
        }} />
        <select onChange={(e) => {
            if(e.target.value === 'date'){
                props.dispatch(sortByDate())
                console.log('date sort');
            } else {
                props.dispatch(sortByAmount())
            }
        }}>
            <option value="date" onChange={(e)=> {
                console.log(e);
            }}>Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);