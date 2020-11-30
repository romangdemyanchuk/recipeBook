import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import MainReducer from "../../session/mainReducer";

const allReducers = combineReducers({ main: MainReducer });
const store = createStore(allReducers, applyMiddleware(thunk));
export default store;
