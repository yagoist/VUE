import { combineReducers, createStore, applyMiddleware } from "redux";
import { chatsReducer } from "./reducer/chatsReducer";
import { userReducer } from "./reducer/userReducer";
import thunk from 'redux-thunk'
// import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";
// import { botAnswer } from "./reducer/actions/BotAnswer";
import { createLogger } from "redux-logger";

const logger = createLogger ({
    collapsed: true,
    diff: true
})


// const persistConfig = {
//     key: 'root',
//     storage
// }


const rootReducer = combineReducers({
    posts: chatsReducer,
    user: userReducer,
    // botAnswered: botAnswer
})

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

// export const persistor = persistStore(store)

