import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logIn } from '../actions/bankingActions';

function Auth() {
    const auth = useSelector( (state) => state.auth);
    const dispatch = useDispatch ('');
    const  handlelogin = ()=>{
        dispatch(logIn())
    }
    return (
        <div>
            <button onClick={ handlelogin } className="btn btn-info">
                { auth.isLoggedIn ? "logout" : "login" }
                </button>
        </div>
    )
}

export default Auth;
