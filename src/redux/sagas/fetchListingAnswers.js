import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchListingDetails(action) {
    try {
        const getListingDetails = yield axios.get('/api/listing');
        console.log('listing_answers:', getListingDetails);
        yield put({ type: 'SET_LISTING_INFO1', payload: getListingDetails.data })
    } catch (error) {
        console.log('error getting listing answers', error);
    }
}



function* fetchListingAnswers() {
    yield takeLatest('LISTING_ANSWERS', fetchListingDetails);

  }
  
  export default fetchListingAnswers;