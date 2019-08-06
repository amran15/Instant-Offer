import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//const only needed for receiving information back 
function* deleteListingAnswer(action) {
    try {
       yield axios.delete(`/api/listing/delete/${action.payload.id}`);
       yield put ({ type: 'LISTING_ANSWER_HISTORY' });
    } catch (error) {
        console.log('error deleting listing_contract answer for pdf', error);
    }
}

function* deleteListingAnswerSaga() {
    yield takeLatest('DELETE_LISTING_ANSWER', deleteListingAnswer);

}

export default deleteListingAnswerSaga;