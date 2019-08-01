const listingCategory1 = (state = [], action) =>{
    switch (action.type){
        case 'SET_LISTING_INFO1':
        return action.payload;
        default:
         return state;
    }
  }
  
  export default listingCategory1;