import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducer} from "../../redux/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;