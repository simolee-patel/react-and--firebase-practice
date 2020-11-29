import React from 'react';
import { auth, provider } from './firebase';
import './login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';


function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <button onClick={signIn}>Login with google</button>
        </div>
    )

}

export default Login
