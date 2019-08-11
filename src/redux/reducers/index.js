import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';

// import listingContract1 from './listingContract1Reducer';
import createNewListingForm from './createNewListingFormReducer';
import listingDrafts from './listingDraftsReducer';
import listingSignedDocs from './listingSignedDocsReducer';
import listingAnswers from './listingAnswersReducer';
import setListingAnswers from './setListingAnswersReducer';


import createNewPurchaseForm from './createNewPurchaseFormReducer';

import deleteListingAnswerReducer from './deleteListingAnswerReducer';
import deletePurchaseAnswerReducer from './deletePurchaseAnswerReducer';




import signReducer from './signReducer';
import activeUserReducer from './activeUserReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  
  
 //creates new Listing form
  createNewListingForm, 
  listingDrafts,
  listingSignedDocs,
  listingAnswers,
  setListingAnswers,

  createNewPurchaseForm,

  deleteListingAnswerReducer, 
  deletePurchaseAnswerReducer,



  activeUserReducer,
  signReducer,
});

export default rootReducer;
