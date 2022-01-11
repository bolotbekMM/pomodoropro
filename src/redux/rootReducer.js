import { bgReducer, BG_KEY } from "./bgRedux/bgReducer";
import { combineReducers } from "redux";

let rootReducer = combineReducers({
    bgStore:bgReducer
})

export {rootReducer}