import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';

import fetchListingAnswers from './fetchListingAnswers';

import pdfListing from './pdfListing'
import pdfOffer from './pdfOffer'
import listingCategory8Saga from './listingcategory8saga';
import listingCategory3Saga from './listingcategory3saga';
import listingCategory4Saga from './listingcategory4saga';
import listingCategory5Saga from './listingcategory5saga';

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
    pdfListing(),
    pdfOffer(),
    listingCategory8Saga(),
    listingCategory3Saga(),
    listingCategory4Saga(),
    listingCategory5Saga(),
  ]);
}
