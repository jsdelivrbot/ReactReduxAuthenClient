import axios from 'axios';

export function signinUser({ email, password }) {
    // Submit email and password to server
    const request = axios.post('http://localhost:5000/signin', { email, password });


    return (dispatch) => {
        request.then(res => {
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