const deleteListingAnswerReducer = (state = [], action) =>{
    switch (action.type){
        case 'LISTING_ANSWER_HISTORY':
        return action.payload;
        default:
         return state;
    }
  }
  
  export default deleteListingAnswerReducer;