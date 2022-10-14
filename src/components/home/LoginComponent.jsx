import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from '../shared/util.js';
import config from '../../config.js';


const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('Please Enter email');
    const [passwordError, setPasswordError] = useState('Please Enter password');
    const [isFormValid, setIsFormValid] = useState(false);
    const [showError, setShowError] = useState(false);
    const [loginStatus, setLoginStatus] = useState(true);

    const handleChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let email_valid = false;
        let pwd_valid = false;
        switch (name) {
            case 'email':
                setEmail(value);
                validateEmail(value) ? email_valid = true : email_valid = false;
                email_valid ? setEmailError('') : setEmailError('Email is not valid!');
                if (email_valid && !passwordError.length) {
                    setIsFormValid(true);
                } else {
                    setIsFormValid(false);
                }

                break;
            case 'password':
                setPassword(value);
                validatePassword(value) ? pwd_valid = true : pwd_valid = false;
                pwd_valid ? setPasswordError('') : setPasswordError('Password must be at least 8 characters long!');
                if (!emailError.length && pwd_valid) {
                    setIsFormValid(true);
                } else {
                    setIsFormValid(false);
                }
                break;
            default:
                break;
        }
        setShowError(true);
    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const URL = config.hostname + config.authentication + '/login'
        var payload = {
            "password": email,
            "userName": password
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };
        fetch(URL, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    if (!result.response) {
                        this.setState({ ['loginStatus']: false });
                    } else {
                        debugger;
                    }
                },
                (error) => {
                    navigate('/dashboard');
                }
            )
    }

    return (
        <div className="pt-4">
            <div>
                <form>
                    <div className="form-floating mb-3">
                        <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange} />
                        <label htmlFor="floatingInput">Email address</label>
                        {emailError.length > 0 && showError &&
                            <span className='error'>{emailError}</span>}
                    </div>
                    <div className="form-floating">
                        <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange} />
                        <label htmlFor="floatingPassword">Password</label>
                        {passwordError.length > 0 && showError &&
                            <span className='error'>{passwordError}</span>}
                    </div>
                </form>
            </div>
            <div className="d-grid gap-2 mt-2">
                <button className="btn btn-dark btn-primary" type="button" onClick={handleSubmit} disabled={!isFormValid} >Login</button>
            </div>

            <div className={`alert alert-danger mt-2 alert-dismissible fade ${loginStatus ? '' : 'show'}`} role="alert">
                <strong>Login failed!</strong> Please Enter correct credentials
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={closeMessage} />
            </div>

        </div>
    );
}

const closeMessage = (event) => {
    this.setLoginStatus(true);
}

export default LoginComponent;