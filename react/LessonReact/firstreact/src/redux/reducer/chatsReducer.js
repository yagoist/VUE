const initialState = {
    chats: [
        {
            id: 1,
            name: 'machine'
        },
        {
            id: 2,
            name: 'engine'
        },
        {
            id: 3,
            name: 'chasis'
        },
        {
            id: 4,
            name: 'repair'
        },
    ],
    messages: [
        {
            chatId: 1,
            message: 'Hello!!!'
        },
        {
            chatId: 1,
            message: 'Hi!!!'
        },
        {
            chatId: 1,
            message: 'Are we all there? :)'
        },
        {
            chatId: 1,
            message: 'Yes!!!'
        },
        {
            chatId: 2,
            message: 'Any body there???'
        },
    ]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addChat':
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }
        case 'deleteChat':
            return {
                ...state,
                chats: state.chats.filter((element) => element.id !== action.payload)
            }
        default:
            return state
    }
}