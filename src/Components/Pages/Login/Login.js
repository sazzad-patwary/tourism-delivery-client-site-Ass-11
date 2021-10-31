import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    // const { user, signInUsingGoogle } = useFirebase();
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();

    const history = useHistory();
    const redirect_uri = location.state?.from || '/placeoder';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    return (
        // login form 
        <div className="mx-auto w-25 py-5 bg-">
            <h3 className="text-center">Login Please</h3>
            <form >
                <div className="mb-3 row">
                    <input type="text" className="form-control" placeholder="your email" />
                </div>
                <div className="mb-3 row">
                    <input type="password" className="form-control" id="inputPassword" placeholder="your password" />
                </div>
                <div className="mb-3 row">
                    <p className="text-center">New ? <Link className="text-blue" to="/register">Register</Link> at first</p>
                    <h4 className="text-center">or</h4>
                </div>
                <div className="d-flex justify-content-center">
                    <Button onClick={handleGoogleLogin} variant="primary">Google Signin</Button>
                </div>

            </form>
            {/*   <h3>Please Login</h3>
            <form action="">
                <input type="email" placeholder="enter your email" /><br />
                <input type="password" placeholder="enter your password" /><br />
                <input type="submit" />
            </form>
            <p>New ? <Link classNameName="text-blue" to="/register">Register</Link> at first</p>
            <hr />
            <button>Google Sign In</button> */}
        </div >
    );
};

export default Login;