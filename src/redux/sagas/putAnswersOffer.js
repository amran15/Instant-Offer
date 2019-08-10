import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* saveAnswers(action) {
    try {
        console.log('axiox call for api/purchase/update')
        yield axios.put(`/api/purchase/update`, action.payload);

    } catch (error) {
        console.log('error in putAnswersOffer purchase saga', error);
    }
}



function* putAnswersOffer() {
    yield takeLatest('SAVE_ANSWERS_FOR_PURCHASE', saveAnswers);

  }
  
  export default putAnswersOffer;