const listingContract7Reducer = (state ={}, action) => {
    switch (action.type) {
        case 'LISTING_CATEGORY_7':
            console.log('category 7 Reducer', action.payload);
            return action.payload
            default:
                return state;
    }
}


export default listingContract7Reducer;