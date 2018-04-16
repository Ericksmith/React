import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', amount: 10000, createdAt: -21000}));
store.dispatch(addExpense({description: 'gas bill', amount: 10000, createdAt: -21000}));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visableExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visableExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
