const createNewListingFormReducer = (state = {}, action) => {
        switch (action.type) {
                case 'SET_LISTING_CONTRACT_FORM':
                        return { ...state, ...action.payload }
                case 'CLEAR_NEW_LISTING_FORM':
                        return {};
                default:
                        return state;
        }
}





export default createNewListingFormReducer;