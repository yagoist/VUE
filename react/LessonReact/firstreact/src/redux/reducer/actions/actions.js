import * as types from '../actions/actionTypes'
import { auth } from '../../../services/firebase'

const registerStart = () => (
    {
        type: types.REGISTER_START
    }
)

const registerSuccess = (user) => (
    {
        type: types.REGISTER_SUCCESS,
        payload: user
    }
)

const registerError = (err) => (
    {
        type: types.REGISTER_ERROR,
        payload: err
    }
)

const loginStart = () => (
    {
        type: types.LOGIN_START
    }
)

const loginSuccess = (user) => (
    {
        type: types.LOGIN_SUCCESS,
        payload: user
    }
)

const loginError = (err) => (
    {
        type: types.LOGIN_ERROR,
        payload: err
    }
)

const logoutStart = () => (
    {
        type: types.LOGOUT_START
    }
)

const logoutSuccess = () => (
    {
        type: types.LOGOUT_SUCCESS,
    }
)

const logoutError = (err) => (
    {
        type: types.LOGOUT_ERROR,
        payload: err
    }
)

export const registerInitiate = (email, password, displayName) => {
    return(dispatch) => {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({
                    displayName
                })
                dispatch(registerSuccess(user))
            })
            .catch((e) => dispatch(registerError(e.message)))
    }
}

export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(loginStart());
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(loginSuccess(user))
            })
            .catch((e) => dispatch(loginError(e.message)))
    }
}

export const logoutInititate = () => {
    return(dispatch) => {
        dispatch(logoutStart());
        auth
            .signOut()
            .then((resp) => dispatch(logoutSuccess()))
            .catch((e) => dispatch(logoutError(e.message)))
    }
}