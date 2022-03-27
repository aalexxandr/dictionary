import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducer} from "../../types/generic";

export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;