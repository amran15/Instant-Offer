import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPurchaseDetails(action) {
    try {
        const purchase_answers = yield axios.get(`/api/purchase/answers/${action.payload.id}`);
        console.log('purchase_agreement_answers:', purchase_answers);
        yield put({ type: 'SET_PURCHASE_ANSWERS', payload: purchase_answers.data })
    } catch (error) {
        console.log('error getting purchase_agreement answers on DOM', error);
    }
}

function* fetchPurchaseAnswers() {
    yield takeLatest('PURCHASE_ANSWERS', fetchPurchaseDetails);
  }
  
  export default fetchPurchaseAnswers;