import { LOGIN_SUCCESS, LOGIN_FAILED } from './constants';

const initialState = {
    userEmail: '7@gmail.com',
    password: 77777,
    isLoggedIn: false,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
            };
        case LOGIN_FAILED:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return {
                ...state,
            };
    }
}

export default loginReducer;