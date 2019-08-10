const listingDraftsReducer = (state = [], action) => {
        switch (action.type) {
                case 'SET_LISTING_DRAFTS':
                        return action.payload
                default:
                        return state;
        }
}

export default listingDraftsReducer;