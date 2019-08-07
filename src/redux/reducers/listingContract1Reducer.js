const listingContract1Reducer = (state ={}, action) =>{
    switch (action.type){
        case 'LISTING_CATEGORY_1':
          console.log('category1 Reducer', action.payload);
        return action.payload;
        default:
         return state;
    }
  }
  


  // const listingContract1Reducer = (state ={}, action) =>{
  //   switch (action.type){
  //       case 'ADD_LISTING_CATEGORY_1':
  //       return {...state, ...action.payload}
  //       case 'CLEAR'
          //return {};
  // default:
  //        return state;
  //   }
  // }





  export default listingContract1Reducer;