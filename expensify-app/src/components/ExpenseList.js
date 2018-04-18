import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <p>
            {props.filters.text}
            {props.expenses.length}
        </p>
    </div>
)

const mapStateToProps = (state)=>{
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList);