const initialState = {
    chats:[
        {
            id: 11,
            userName: 'Kolya',
            body: 'hello all'
        },
        {
            id: 12,
            userName: 'Sveta',
            body: 'Hi!!!'
        },
        {
            id: 13,
            userName: 'Sonya',
            body: 'To all!'
        },
        {
            id: 14,
            userName:'John',
            body: 'Nice!'
        },    
    ],
    chat2: [
        {
            id: 21,
            userName: 'Kolya',
            body: 'hello all'
        },
        {
            id: 22,
            userName: 'Sveta',
            body: 'Hi!!!'
        },
        {
            id: 23,
            userName: 'Sonya',
            body: 'To all!'
        },
        {
            id: 24,
            userName:'John',
            body: 'Nice!'
        },
    ],
    chat3: [
        {
            id: 31,
            userName: 'Kolya',
            body: 'hello all'
        },
        {
            id: 32,
            userName: 'Sveta',
            body: 'Hi!!!'
        },
        {
            id: 33,
            userName: 'Sonya',
            body: 'To all!'
        },
        {
            id: 34,
            userName:'John',
            body: 'Nice!'
        },
    ],

}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addMessage':
            return state
        case 'deleteMessage':
            return state
        default:
            return state
    }
}