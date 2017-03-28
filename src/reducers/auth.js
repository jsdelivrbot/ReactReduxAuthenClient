import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from '../actions/types';

const INITIAL = { authenticated: false };

export default (state = INITIAL, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true };
            break;
        case UNAUTH_USER:
            return { ...state, error: '', authenticated: false };
            break;
        case AUTH_ERROR:
            return { ...state, error: action.payload };
            break;
        case FETCH_MESSAGE:
            //console.log(action.payload);
            //แบบ redux-promise
            return { ...state, message: action.payload.data.message };
            break;
        default:
            return state;
            break;
    }
}