const listingContract3Reducer = (state ={}, action) => {
    switch (action.type) {
        case 'LISTING_CATEGORY_3':
            console.log('category3 Reducer', action.payload);
            return action.payload
            default:
                return state;
    }
}


export default listingContract3Reducer;