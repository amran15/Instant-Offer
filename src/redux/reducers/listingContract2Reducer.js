const listingContract2Reducer = (state = {}, action) =>{
    switch (action.type){
        case 'LISTING_CATEGORY_2':
          console.log('category2 Reducer', action.payload);
        return action.payload;
        default:
         return state;
    }
  }
  
  export default listingContract2Reducer;