

const listingCategory8Reducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CATEGORY8':
            console.log('inside category8', action.payload);
            return action.payload
        default:
            return state;
    }
}



export default listingCategory8Reducer;
