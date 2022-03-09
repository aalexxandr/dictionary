import {compose} from "redux";
import {rootReducer} from "../redux/reducers";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export type RootReducer = ReturnType<typeof rootReducer>