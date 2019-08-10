const listingAnswersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LISTING_ANSWERS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.userReducer
export default listingAnswersReducer;
