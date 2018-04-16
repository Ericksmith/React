import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', amount: 10000, createdAt: -21000}));
store.dispatch(addExpense({description: 'gas bill', amount: 10000, createdAt: -21000}));

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));
