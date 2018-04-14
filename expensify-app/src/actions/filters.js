export const setTextFilter = (query = '') => ({
    type: 'FILTER_EXPENSE',
    query
});

export const sortByDate = () => ({ 
    type: 'FILTER_SORTBY',
    sortBy: 'date'
})

export const sortByAmount = () => ({ 
    type: 'FILTER_SORTBY',
    sortBy: 'amount'
})

export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_TIME',
    startDate
})

export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_TIME',
    endDate
});