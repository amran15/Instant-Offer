import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';


function* listedForLease (action) {
    console.log('we are posting listing category 3', action.payload);
    try{
        //action.payload will be the state object coming from listingCategory 3.js
        yield axios.post('/api/listing/category3', action.payload)
    }catch(error){
        console.log('ERROR making the axios POST request');
    }
}


//this will export our saga
function* listingCategory3Saga(){
    yield takeLatest ('POST_LISTEDFOR_LEASE', listedForLease)
}

export default listingCategory3Saga;