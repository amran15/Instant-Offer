const listingCategory6Reducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CATEGORY6':
            console.log('inside listing category 6 reducer', action.payload);
            return action.payload
        default:
            return state;
    }
}

export default listingCategory6Reducer;