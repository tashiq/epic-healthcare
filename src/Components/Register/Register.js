import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    document.title = 'Epic Health Care| Register';
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { createUser, googleSignIn, user, updateName } = useAuth();
    const getName = (e) => {
        setName(e.target.value);
    }
    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    const getPassword = (e) => {
        setPassword(e.target.value);
    }
    const newUser = (e) => {
        e.preventDefault();
        createUser(email, password);

        updateName(name);
        history.push('/home')
        console.log(user);
    }
    const google = (e) => {
        e.preventDefault()
        googleSignIn();
    }
    return (
        <div className="container p-5 m-5">
            <h2>Please Register</h2>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Name" onBlur={getName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={getPassword} type="password" placeholder="Password" />
                </Form.Group>



                <Button className="btn btn-primary" onClick={newUser}>
                    Submit
                </Button>
            </Form>
            <Link to="/login">Already have an Account?</Link>
            <br />
            <h5>Or</h5>
            <button className="btn btn-warning" onClick={google}>Register With Google</button>
        </div>
    );
};

export default Register;