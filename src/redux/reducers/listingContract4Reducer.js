const listingContract4Reducer = (state ={}, action) => {
    switch (action.type) {
        case 'LISTING_CATEGORY_4':
            console.log('category 4 Reducer', action.payload);
            return action.payload
            default:
                return state;
    }
}


export default listingContract4Reducer;