const filterReducerDefaultState = { 
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined 
};

export default (state = filterReducerDefaultState, action) => {
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