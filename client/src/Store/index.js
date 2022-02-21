import {applyMiddleware, createStore} from "redux";
import {AppReducers} from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(AppReducers, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
});