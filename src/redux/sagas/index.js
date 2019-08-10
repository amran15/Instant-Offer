import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';

import fetchListingAnswers from './fetchListingAnswers';

import newListingContractForm from './newListingContractForm';
import getListingDrafts from './fetchListingDrafts';
import getListingSignedDocs from './fetchListingSignedDocs';

import newPurchaseAgreementForm from './newPurchaseAgreementForm';

import pdfListing from './pdfListing';
import pdfOffer from './pdfOffer';

import deleteListingAnswer from './deleteListingAnswer';
import deletePurchaseAnswerSaga from './deletePurchaseAnswer';
import putAnswers from './putAnswers';
import thisRootSaga from './signSaga';



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
    getListingDrafts(),
    getListingSignedDocs(),
    newListingContractForm(),
    newPurchaseAgreementForm(),
    pdfListing(),
    pdfOffer(),
    deleteListingAnswer(),
    deletePurchaseAnswerSaga(),
    putAnswers(),
    thisRootSaga(),
  ]);
}
