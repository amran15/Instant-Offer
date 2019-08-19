import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPurchaseDetails(action) {
    try {
        const purchase = yield axios.get(`/api/purchase/answers/${action.payload}`);
        console.log('purchase_agreement_answers:', purchase);
        yield put({ type: 'SET_PURCHASE_ANSWERS', payload: purchase.data })
    } catch (error) {
        console.log('error getting purchase_agreement answers on DOM', error);
    }
}

function* fetchPurchaseAnswers() {
    yield takeLatest('PURCHASE_ANSWERS', fetchPurchaseDetails);
  }
  
  export default fetchPurchaseAnswers;