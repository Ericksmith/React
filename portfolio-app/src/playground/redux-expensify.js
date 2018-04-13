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
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = (query = '') => ({
    type: 'FILTER_EXPENSE',
    query
});

const sortByDate = () => ({ 
    type: 'FILTER_SORTBY',
    sortBy: 'date'
})

const sortByAmount = () => ({ 
    type: 'FILTER_SORTBY',
    sortBy: 'amount'
})

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_TIME',
    startDate
})

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_TIME',
    endDate
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((item)=>{
                return item.id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((item)=>{
                if(item.id === action.id){
                    return {
                        ...item,
                        ...action.updates
                    }
                } else {
                    return item
                }
            })
        default:
         return state;
    }
};

const filterReducerDefaultState = { 
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined 
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
    case 'FILTER_EXPENSE':
        return {
            ...state,
            text: action.query
        }
    case 'FILTER_SORTBY':
        return {
            ...state,
            sortBy: action.sortBy
        }
    case 'SET_START_TIME':
        return {
            ...state,
            startDate: action.startDate
        }
    case 'SET_END_TIME':
        return {
            ...state,
            endDate: action.endDate
        }
    default:
        return state;
    }
}


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLocaleLowerCase().includes(text.toLocaleLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    });
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    console.log('filters', state.filters);
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expense1 =store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expense2 =store.dispatch(addExpense({ description: 'Coffee', amount: 1000, createdAt: -1000 }));
// store.dispatch(removeExpense({ id: expense1.expense.id}))

// store.dispatch(editExpense( expense2.expense.id, { amount: 500 }  ))

store.dispatch(setTextFilter('coffee'));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(10000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(-1250));


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


const user = {
    name: 'jen',
    age: 24
}

// console.log({
//     ...user,
//     location: 'philly',
//     age: 23
// });