import { AUTH_USER, UNAUTH_USER } from '../actions/types';

const INITIAL = { authenticated: false };

export default (state = INITIAL, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, authenticated: action.payload };
            break;
        case UNAUTH_USER:
            return { ...state, authenticated: action.payload };
            break;

        default:
            return state;
            break;
    }
}