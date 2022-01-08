import { rootReducer } from "./rootReducer";
import { createStore } from "redux";


let store = createStore(rootReducer)

export {store}