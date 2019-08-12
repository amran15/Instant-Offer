import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchListingDetails(action) {
    try {
        const answers = yield axios.get(`/api/listing/answers/${action.payload.id}`);
        console.log('listing_answers:', answers);
        yield put({ type: 'SET_LISTING_ANSWERS', payload: answers.data })
    } catch (error) {
        console.log('error getting listing answers to render on DOM', error);
    }
}

function* fetchListingAnswers() {
    yield takeLatest('LISTING_ANSWERS', fetchListingDetails);
  }
  
  export default fetchListingAnswers;