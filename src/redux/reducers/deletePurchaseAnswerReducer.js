const deletePurchaseAnswerReducer = (state = [], action) =>{
    switch (action.type){
        case 'PURCHASE_ANSWER_HISTORY':
        return action.payload;
        default:
         return state;
    }
  }
  
  export default deletePurchaseAnswerReducer;