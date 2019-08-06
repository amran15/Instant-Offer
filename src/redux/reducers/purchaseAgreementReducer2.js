const purchaseAgreementCategory2Reducer = (state ={}, action) => {
    switch (action.type){
        case 'PURCHASE_CATEGORY_2':
        return action.payload;
        default:
         return state;
    }
  }
  
 

    export default purchaseAgreementCategory2Reducer;