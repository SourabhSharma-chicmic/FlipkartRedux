const initialstate = {
    addedProduct : []
};


export const AddedProductReducer = ( state = initialstate,action) => {
    switch (action.type) {
        case "SET_ADD_PRODUCT":
            return {
                ...state,
                addedProduct:action.payload
            }
    
        default:  return state;
            
    }
}