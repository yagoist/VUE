import { combineReducers, createStore } from "redux";
import { chatsReducer } from "./reducer/chatsReducer";
import { userReducer } from "./reducer/userReducer";
import { messageReducer } from "./reducer/messageReducer"


export const rootReducer = combineReducers({
    chats: chatsReducer,
    user: userReducer,
    messages: messageReducer
})

export const store = createStore(rootReducer)

