import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchListingDetails(action) {
    try {
        console.log('id', action.payload)
        var answers = yield axios.get(`/api/listing/answers/${action.payload}`);
        console.log('listing_answers:', answers.data[0]);
        answers = answers.data[0]
        delete answers.id
        yield put({ type: 'SET_LISTING_ANSWERS', payload: answers })
    } catch (error) {
        console.log('error getting listing answers to render on DOM', error);
    }
}

function* fetchListingAnswers() {
    yield takeLatest('LISTING_ANSWERS', fetchListingDetails);
  }
  
  export default fetchListingAnswers;