import { createStore } from 'redux';



const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1}= {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
});

//Reducer
// 1. Reducers are pure functions, they don't user variables from outside thier scope
// 2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            const incrementBy = typeof(action.incrementBy) === 'number' ? action.incrementBy : 1; 
            return {
                count: state.count + incrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'DECREMENT':
            const decrementBy = typeof(action.decrementBy) === 'number' ? action.decrementBy : 1; 
            return {
                count: state.count - decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state; 
    } 
}

const store = createStore(countReducer);

store.subscribe(() => {
    console.log('sub', store.getState());
});

store.dispatch(incrementCount({incrementBy: 10000}));
store.dispatch(decrementCount({decrementBy: 5000}));
store.dispatch(resetCount());
store.dispatch(setCount({count: 69}));


store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT',
});

store.dispatch({
    type: 'RESET'
});
store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 4
})

store.dispatch({
    type: 'SET',
    count: 101
})