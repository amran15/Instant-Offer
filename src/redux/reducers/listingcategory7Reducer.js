const listingCategory7Reducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CATEGORY7':
            console.log('inside listing category 7 reducer', action.payload);
            return action.payload
        default:
            return state;
    }
}

export default listingCategory7Reducer;