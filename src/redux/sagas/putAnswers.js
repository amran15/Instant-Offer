import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* saveAnswers(action) {
    try {
        yield axios.put(`/api/listing/update`,action.payload);

    } catch (error) {
        console.log('error in putAnswers saga', error);
    }
}



function* putAnswers() {
    yield takeLatest('SAVE_ANSWERS', saveAnswers);

  }
  
  export default putAnswers;