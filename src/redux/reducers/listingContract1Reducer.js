const listingContract1Reducer = (state ={}, action) =>{
    switch (action.type){
        case 'LISTING_CATEGORY_1':
        return action.payload;
        default:
         return state;
    }
  }
  
  export default listingContract1Reducer;