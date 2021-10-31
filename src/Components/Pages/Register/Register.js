import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    // const { user, signInUsingGoogle } = useFirebase();
    const { user, signInUsingGoogle } = useAuth();
    return (
        <div className="mx-auto w-25 py-5 bg-">
            <h3 className="text-center">Register</h3>
            <form >
                <div className="mb-3 row">
                    <input type="text" className="form-control" placeholder="your email" />
                </div>
                <div className="mb-3 row">
                    <input type="password" className="form-control" id="inputPassword" placeholder="your password" />
                </div>
                <div className="mb-3 row">
                    <input type="password" className="form-control" id="inputPassword" placeholder="ReEnter your password" />
                </div>
                <div className="mb-3 row">
                    <p className="text-center">Already registered ? <Link className="text-blue" to="/login">Login</Link> at first</p>
                    <h4 className="text-center">or</h4>
                </div>
                <div className="d-flex justify-content-center">
                    <Button onClick={signInUsingGoogle} variant="primary">Google Signin</Button>
                </div>

            </form>
        </div>
    );
};

export default Register;