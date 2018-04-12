import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    }) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        
        default:
            return state;
    }
};

const filterReducerDefaultState = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined };

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(addExpense({ description: 'Rent', amount: 100 }));

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'adsfnandsfwrea',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};