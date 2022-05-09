import { combineReducers, createStore, applyMiddleware } from "redux";
import { chatsReducer } from "./reducer/chatsReducer";
import { userReducer } from "./reducer/userReducer";
import thunk from 'redux-thunk'
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";



const persistConfig = {
    key: 'root',
    storage
}


const rootReducer = combineReducers({
    chats: chatsReducer,
    user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)

