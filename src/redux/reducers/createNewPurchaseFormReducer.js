const createNewPurchaseAgreementReducer = (state = {}, action) => {
    switch (action.type) {
            case 'SET_PURCHASE_AGREEMENT_FORM':
                    return { ...state, ...action.payload }
            case 'CLEAR_NEW_PURCHASE_FORM':
                    return {};
            default:
                    return state;
    }
}





export default createNewPurchaseAgreementReducer;