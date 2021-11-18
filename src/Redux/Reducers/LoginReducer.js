const intialState = {
    login : false
}

 export const LoginReducer = (state = intialState,action) => {
    switch (action.type) {
        case "SET_LOGIN":
            return {
                ...intialState,
                login : true
            }
        case "SET_LOGOUT" :
            return {
                ...intialState,
                login :false
            }
        default:
            return state
    }
 }