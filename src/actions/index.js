import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER } from './types';

const API_URL = 'http://localhost:5000';

export function signinUser({ email, password }) {
    return (dispatch) => {
        // Submit email and password to server
        axios.post(`${API_URL}/signin`, { email, password })
            .then(res => {
                // If request is good
                // - Update state to indicate user in authenticated
                dispatch({ type: AUTH_USER, });
                // - Save the JWT token
                // - Redirect to the route '/feature'
                browserHistory.push('/feature');
            }).catch(function (error) {
                // If request is bad
                // - Show an error to the user
                console.log(error);
                dispatch({ type: UNAUTH_USER });
            });
    }
}