import axios from 'axios';

const API_URL = 'http://localhost:5000';

export function signinUser({ email, password }) {
    return (dispatch) => {
        // Submit email and password to server
        axios.post(`${API_URL}/signin`, { email, password })
            .then(res => {
                console.log(res);
                dispatch({
                    type: 'success',
                    payload: res.data
                });
            }).catch(function (error) {
                console.log(error);
                dispatch({
                    type: 'err',
                    payload: res.data
                });
            });
    }


    // If request is good
    // - Update state to indicate user in authenticated
    // - Save the JWT token
    // - Redirect to the route '/feature'

    // If request is bad
    // - Show an error to the user
}