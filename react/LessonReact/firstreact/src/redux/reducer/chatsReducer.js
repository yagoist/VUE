// import * as types from './actions/actionTypes'

const initialState = {
    posts: [],
    chatsLoading: false,
    loadingError: null,
    user: null,
    error: null,
    loading: false
        
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'get_posts': {
            return {
                ...state,
                posts: action.payload,
                chatsLoading: false,
            }
        }
        case 'chatsLoading':
            return {
                ...state,
                chatsLoading: true
            }
        case 'loadingError':
            return {
                ...state,
                chatsLoading: false,
                loadingError: action.payload 
            }
        // case 'deleteChat':
        //     return {
        //         ...state,
        //         chats: state.chats.filter((element) => element.id !== action.payload)
        //     }
        default:
            return state
    }
}
export const loadPosts = () => {
    return async(dispatch) => {
        dispatch({
            type: 'chatsLoading'
        })
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const posts = await response.json()
            dispatch({
                type: 'get_posts',
                payload: posts
            })
        } catch (err) {
            dispatch({
                type: 'loadingError',
                payload: err.message
            });
        }
    } 
}
