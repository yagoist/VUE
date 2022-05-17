import * as types from './actions/actionTypes'

const initialState = {
    posts: [],
    chatsLoading: false,
    loadingError: null,
    user: null,
    error: null,
    loading: false
        
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
      case types.REGISTER_START: 
      case types.LOGIN_START:
      case types.LOGOUT_START:
          return {
              ...state,
              loading: true
          }
      case types.LOGOUT_SUCCESS:
        return {
          ...state,
          user: null
        }
      case types.REGISTER_SUCCESS:
      case types.LOGIN_SUCCESS:
          return {
              ...state,
              user: action.payload,
              loading: false
          }
      case types.REGISTER_ERROR:
      case types.LOGIN_ERROR:
      case types.LOGOUT_ERROR:
          return {
              ...state,
              loading: false,
              error: action.payload
          }
      default:
          return state
  }
}