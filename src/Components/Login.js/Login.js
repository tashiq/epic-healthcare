import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const { user, emailSignIn, googleSignIn } = useAuth();
    const history = useHistory();
    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    const getPass = (e) => {
        setPass(e.target.value);
    }
    document.title = 'Epic Health Care| Login';
    const signIn = (e) => {
        e.preventDefault();
        emailSignIn(email, pass);
    }
    const google = (e) => {
        e.preventDefault();
        googleSignIn();

    }
    if (user.email) {
        history.push('/home')
    }
    return (
        <div className="my-5 py-3 container">
            <h3>Please LogIn</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onBlur={getEmail} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onBlur={getPass} />
                </Form.Group>
                <Link to='/register'>New User?</Link> <br />
                <Button variant="primary" type="submit" onClick={signIn}>
                    Submit
                </Button>
                <br />
                <button className="btn btn-success mt-2" onClick={google}>Sign in Using Google</button>
            </Form>
        </div>
    );
};

export default Login;