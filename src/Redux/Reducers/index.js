import { combineReducers } from "redux";
import { AddedProductReducer } from "./AddedProductReducer";
import { LoginReducer } from "./LoginReducer";

export const rootReducer = combineReducers({
    auth : LoginReducer,
    product:AddedProductReducer
})