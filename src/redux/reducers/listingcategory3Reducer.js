const listingCategory3Reducer = (state ={}, action) => {
    switch (action.type) {
        case 'SET_CATEGORY3':
            console.log('category3reducerrrrrrrrrrr', action.payload);
            return action.payload
            default:
                return state;
    }
}


export default listingCategory3Reducer;