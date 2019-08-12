const purchaseAgreementDraftsReducer = (state = [], action) => {
    switch (action.type) {
            case 'SET_PURCHASEAGREEMENT_SIGNED_DOCS':
                    return action.payload
            default:
                    return state;
    }
}

export default purchaseAgreementDraftsReducer;