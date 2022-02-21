import { articleReducer } from "./Articles/_reducer";
import {combineReducers} from "redux";

export const AppReducers = combineReducers({
    articleReducer,
});
