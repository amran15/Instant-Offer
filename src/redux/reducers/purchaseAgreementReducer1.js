const purchaseAgreementCategory1Reducer = (state ={}, action) => {
    switch (action.type){
        case 'PURCHASE_CATEGORY_1':
        return action.payload;
        default:
         return state;
    }
  }
  
 

    export default purchaseAgreementCategory1Reducer;