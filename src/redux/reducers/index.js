import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import listingCategory1 from './listingCategory1Reducer';

import listingCategory3Reducer from './listingcategory3Reducer';
import listingCategory4Reducer from './listingcategory4Reducer';
import listingCategory5Reducer from './listingcategory5Reducer';
import listingCategory6Reducer from './listingcategory6Reducer';
import listingCategory7Reducer from './listingcategory7Reducer';
import listingCategory8Reducer from './listingcategory8reducer';

import listingContract1 from './listingContract1Reducer';
import listingContract2 from './listingContract2Reducer';
import listingContract3 from './listingContract3Reducer';
import listingContract4 from './listingContract4Reducer';
import listingContract5 from './listingContract5Reducer';
import listingContract6 from './listingContract6Reducer';
import listingContract7 from './listingContract7Reducer';
import listingContract8 from './listingContract8Reducer';

import deleteListingAnswerReducer from './deleteListingAnswerReducer';
import deletePurchaseAnswerReducer from './deletePurchaseAnswerReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  
  //Reducers listing contracts 1-8(for saving the local answers to the db)
  listingContract1,
  listingContract2,
  listingContract3, 
  listingContract4,
  listingContract5,
  listingContract6,
  listingContract7, 
  listingContract8,

  deleteListingAnswerReducer, 
  deletePurchaseAnswerReducer,
});

export default rootReducer;
