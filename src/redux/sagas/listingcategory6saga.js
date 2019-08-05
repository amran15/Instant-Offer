import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';


function* closingServices(action){
    console.log('posting listing category 6', action.payload);
    try{
        yield axios.post('/api/listing/category6', action.payload)
    } catch(error){
        console.log('ERROR making this axios POST request', error);
    }
}


function* listingCategory6Saga(){
    yield takeLatest('POST_COMPENSATION_DISCLOSURE', closingServices)
}

export default listingCategory6Saga;