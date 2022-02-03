import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import word from "./modules/word";

// root 리듀서 만들기
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가
const middlewares = [thunk];
const rootReducer = combineReducers({ word });
const enhancer = applyMiddleware(...middlewares);

// 스토어를 만들기
const store = createStore(rootReducer, enhancer);

export default store;