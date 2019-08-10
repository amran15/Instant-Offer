import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchListingDrafts() {
    try {
        const listingDrafts = yield axios.get('/api/listing/drafts');
        console.log('listing_drafts:', listingDrafts);
        yield put({ type: 'SET_LISTING_DRAFTS', payload: listingDrafts.data })
    } catch (error) {
        console.log('error getting listing answers', error);
    }
}



function* getListingDrafts() {
    yield takeLatest('GET_LISTING_DRAFTS', fetchListingDrafts);

  }
  
  export default getListingDrafts;