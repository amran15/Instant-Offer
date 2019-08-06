const listingCategory5Reducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CATEGORY5':
            console.log('inside listing category 5 reducer', action.payload);
            return action.payload
        default:
            return state;
    }
}

export default listingCategory5Reducer;