import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* listingCategories (action) {
    console.log('we are posting category ', action.payload);
    try {
        //action.payload is an object coming from listingCategory.js state
        yield axios.post('/api/listing/save', action.payload)
        // const returnCategory = yield axios.get('api/listing')
        // yield put({type: 'SET_CATEGORY', payload: returnCategory.data});
        // console.log(returnCategory.data);
    }catch(error) {
        console.log('ERROR making the POST query to the database');
    }
}

// This is will combine our sagas
function* listingCategorySaga(){
    yield takeLatest ('POST_AGENCY_REPRESENTATION', listingCategories)
}


export default listingCategorySaga;
