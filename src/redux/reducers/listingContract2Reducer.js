const listingContract2Reducer = (state = {}, action) =>{
    switch (action.type){
        case 'LISTING_CATEGORY_2':
        return action.payload;
        default:
         return state;
    }
  }
  
  export default listingContract2Reducer;