const listingContract8Reducer = (state ={}, action) => {
    switch (action.type) {
        case 'LISTING_CATEGORY_8':
            console.log('category 8 Reducer', action.payload);
            return action.payload
            default:
                return state;
    }
}


export default listingContract8Reducer;
