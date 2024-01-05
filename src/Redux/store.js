import { legacy_createStore, combineReducers } from "redux";
import { userReducer } from "./reducer";

export const store = legacy_createStore(userReducer);