import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const initialState = {};

const middleWare = [thunk, logger];

const store = createStore(rootReducer, compose(applyMiddleware(...middleWare)));

export default store;
