

const listingCategory4Reducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CATEGORY4':
            console.log('inside category 4 reducer', action.payload);
            return action.payload
        default:
            return state;
    }
}


export default listingCategory4Reducer;