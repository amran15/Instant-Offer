import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';


function* foreignInvestment(action){
    console.log('posting listing category 7', action.payload);
    try{
        yield axios.post('/api/listing/category7', action.payload)
    } catch(error){
        console.log('ERROR making this axios POST request', error);
    }
}


function* listingCategory7Saga(){
    yield takeLatest('POST_FOREIGN_INVESTMENT', foreignInvestment)
}

export default listingCategory7Saga;