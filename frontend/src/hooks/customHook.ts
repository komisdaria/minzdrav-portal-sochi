import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store/store";
import { State } from "../redux/types/state";

export const useMySelector: TypedUseSelectorHook<State> = useSelector;
export const useMyDispatch = () => useDispatch<AppDispatch>();
