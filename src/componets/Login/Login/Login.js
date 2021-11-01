import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';




const Login = () => {
    const { signInWithGoogle, users, setUser, setIsLoging, setError } = useAuth();
    console.log(users?.email)

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    // console.log(redirect_uri)


    const handelgoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                localStorage.setItem("user", JSON.stringify(result.user));
                history.push(redirect_uri)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })

            .finally(() => {
                setIsLoging(false)
            })
    }

    return (
        <div>
            <h1>This is log in</h1>
            <button className='btn btn-secondary' onClick={handelgoogleLogin}> google log in</button>
        </div>
    );
};

export default Login;