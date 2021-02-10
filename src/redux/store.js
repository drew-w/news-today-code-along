import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import hackerNewsReducer from "./HackerNewsReducer";
import mediumReducer from "./MediumReducer";

const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer,
    medium: mediumReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
