const listingContract6Reducer = (state ={}, action) => {
    switch (action.type) {
        case 'LISTING_CATEGORY_6':
            console.log('category 6 Reducer', action.payload);
            return action.payload
            default:
                return state;
    }
}


export default listingContract6Reducer;