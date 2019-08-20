const purchaseSignedDocsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PURCHASE_SIGNED_DOCS':
      return action.payload
    default:
      return state;
  }
}

export default purchaseSignedDocsReducer;
