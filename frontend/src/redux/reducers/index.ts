import {sign} from "./sign";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    sign: sign
})

