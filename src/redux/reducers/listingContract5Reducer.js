const listingContract5Reducer = (state ={}, action) => {
    switch (action.type) {
        case 'LISTING_CATEGORY_5':
            console.log('category 5 Reducer', action.payload);
            return action.payload
            default:
                return state;
    }
}


export default listingContract5Reducer;