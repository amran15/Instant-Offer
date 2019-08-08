import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* newListingContract(action) {
    try {
        const { data } = yield axios.post('/api/listing/save', action.payload);
        console.log(data);
        yield put({type: 'SET_LISTING_CONTRACT_FORM' , payload: data[0]})
        yield put({ type: 'SET_ACTIVE_USER_ID', payload: data[0]})
    } catch (error) {
        console.log('error posting/saving listing_contract answers', error);
    }
}

function* newListingContractForm() {
    yield takeLatest('CREATE_NEW_LISTING_CONTRACT_FORM', newListingContract);

}

export default newListingContractForm;