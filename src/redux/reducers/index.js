import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import listingCategory1 from './listingCategory1Reducer';

import listingCategory3Reducer from './listingcategory3Reducer';
import listingCategory4Reducer from './listingcategory4Reducer';
import listingCategory5Reducer from './listingcategory5Reducer';
import listingCategory8Reducer from './listingcategory8reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  listingCategory1,

  listingCategory3Reducer,
  listingCategory4Reducer,
  listingCategory5Reducer,
  listingCategory8Reducer,
});

export default rootReducer;
