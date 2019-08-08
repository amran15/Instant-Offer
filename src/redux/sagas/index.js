import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';

import fetchListingAnswers from './fetchListingAnswers';

import newListingContractForm from './newListingContractForm';

//what does this Saga do?
// import listingCategorySaga from './listingCategorySaga';


import pdfListing from './pdfListing';
import pdfOffer from './pdfOffer';

import deleteListingAnswer from './deleteListingAnswer';
import deletePurchaseAnswerSaga from './deletePurchaseAnswer';



// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    fetchListingAnswers(),
    newListingContractForm(),
    pdfListing(),
    pdfOffer(),
    deleteListingAnswer(),
    deletePurchaseAnswerSaga(),
  ]);
}
