import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';


function* compensationDisclosure(action){
    console.log('posting listing category 5', action.payload);
    try{
        yield axios.post('/api/listing/category5', action.payload)
    } catch(error){
        console.log('ERROR making this axios POST request', error);
    }
}


function* listingCategory5Saga(){
    yield takeLatest('POST_COMPENSATION_DISCLOSURE', compensationDisclosure)
}

export default listingCategory5Saga;