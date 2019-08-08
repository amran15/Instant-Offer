const activeUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_USER_ID':
      return action.payload;
    case 'UNSET_ACTIVE_USER_ID':
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.userReducer
export default activeUserReducer;
