import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postAgencyRep (action) {
    console.log('we are posting category 8', action.payload);
    try {
        //action.payload is an object coming from listingCategory8.js state
        yield axios.post('/api/listing/category8', action.payload)
        // const returnCategory8 = yield axios.get('api/listing')
        // yield put({type: 'SET_CATEGORY8', payload: returnCategory8.data});
        // console.log(returnCategory8.data);
    }catch(error) {
        console.log('ERROR making the POST  query to the database');
    }
}



// This is will combine our sagas
function* category8Saga(){
    yield takeLatest ('POST_AGENCY_REPRESENTATION', postAgencyRep)
}


export default category8Saga;
