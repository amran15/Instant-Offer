import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';


function* brokerCompensation(action){
    console.log('posting posting category 4', action.payload);
    try{
        yield axios.post('/api/listing/category4', action.payload)
    } catch (error) {
        console.log('ERROR making this axios POST request');
    }
}


function* listingCategory4Saga(){
    yield takeLatest('POST_BROKERCOMPENSATION', brokerCompensation)
}


export default listingCategory4Saga;