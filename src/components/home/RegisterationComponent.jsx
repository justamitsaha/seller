import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword, checkPasswordMatch, blankCheck } from '../shared/util.js';
import config from '../../config.js';


const RegisterationComponent = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [emailError, setEmailError] = useState('Please Enter email');
    const [passwordError, setPasswordError] = useState('Please Enter password');
    const [passwordError2, setPasswordError2] = useState('Please Enter password');
    const [fNameError, setFNameError] = useState('Please Enter First Name');
    const [lNameError, setLNameError] = useState('Please Enter Last Name');
    const [isFormValid, setIsFormValid] = useState(false);
    const [showError, setShowError] = useState(false);
    const [registerStatus, setRegisterStatus] = useState(true);
    const [apiError, setApiError] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let email_valid = false;
        let pwd_valid = false;
        let pwd_valid2 = false;
        let fname_valid = false;
        let lname_valid = false;
        switch (name) {
            case 'email':
                setEmail(value);
                validateEmail(value) ? email_valid = true : email_valid = false;
                email_valid ? setEmailError('') : setEmailError('Email is not valid!');
                if (email_valid && !passwordError.length && !passwordError2.length && !fNameError.length && !lNameError.length) {
                    setIsFormValid(true);
                } else {
                    setIsFormValid(false);
                }

                break;
            case 'password':
                setPassword(value);
                validatePassword(value) ? pwd_valid = true : pwd_valid = false;
                pwd_valid ? setPasswordError('') : setPasswordError('Password must be at least 8 characters long!');
                if (!emailError.length && pwd_valid && !passwordError2.length && !fNameError.length && !lNameError.length) {
                    setIsFormValid(true);
                } else {
                    setIsFormValid(false);
                }
                break;
            case 'password2':
                setPassword2(value);
                checkPasswordMatch(password, value) ? pwd_valid2 = true : pwd_valid2 = false;
                pwd_valid2 ? setPasswordError2('') : setPasswordError2('Both password should match');
                if (!emailError.length && !passwordError.length && pwd_valid2 && !fNameError.length && !lNameError.length) {
                    setIsFormValid(true);
                } else {
                    setIsFormValid(false);
                }
                break;
            case 'fName':
                setFName(value);
                blankCheck(value) ? fname_valid = true : fname_valid = false;
                fname_valid ? setFNameError('') : setFNameError('First Name can not be blank');
                if (!emailError.length && !passwordError.length && !passwordError2.length && fname_valid && !lNameError.length) {
                    setIsFormValid(true);
                } else {
                    setIsFormValid(false);
                }
                break;
            case 'lName':
                setLName(value);
                blankCheck(value) ? lname_valid = true : lname_valid = false;
                lname_valid ? setLNameError('') : setLNameError('Last Name can not be blank');
                if (!emailError.length && !passwordError.length && !passwordError2.length && !fNameError.length && lname_valid) {
                    setIsFormValid(true);
                } else {
                    setIsFormValid(false);
                }
                break;

            default:
                break;
        }
        setShowError(true);
    };
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const URL = config.hostname + config.authentication + '/register'
        var payload = {
            "emailId": email,
            "firstName": fName,
            "lastName": lName,
            "password": password,
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };
        fetch(URL, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.response) {
                        navigate('/dashboard');
                    } else {
                        setRegisterStatus(false);
                        setApiError(result.status);
                    }
                },
                (error) => {
                    setRegisterStatus(false);
                    setApiError("Something went wrong! Please try again later");
                }
            )
    };

    const closeMessage = (event) => {
        setRegisterStatus(true);
    }
    return (
        <div className="pt-4">
            <div>
                <form >
                    <div className="form-floating mb-3">
                        <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange} />
                        <label htmlFor="floatingInput">Email address</label>
                        {emailError.length > 0 && showError &&
                            <span className='error'>{emailError}</span>}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={handleChange} />
                        <label htmlFor="password">Password</label>
                        {passwordError.length > 0 && showError &&
                            <span className='error'>{passwordError}</span>}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" name="password2" className="form-control" id="password2" placeholder="Password" onChange={handleChange} />
                        <label htmlFor="password2">Re enter password</label>
                        {passwordError2.length > 0 && showError &&
                            <span className='error'>{passwordError2}</span>}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name="fName" className="form-control" id="fName" placeholder="First name" onChange={handleChange} />
                        <label htmlFor="password">Enter First Name</label>
                        {fNameError.length > 0 && showError &&
                            <span className='error'>{fNameError}</span>}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name="lName" className="form-control" id="lName" placeholder="Last Name" onChange={handleChange} />
                        <label htmlFor="text">Enter Last Name</label>
                        {lNameError.length > 0 && showError &&
                            <span className='error'>{lNameError}</span>}
                    </div>
                </form>
            </div>
            <div className="d-grid gap-2 mt-2">
                <button className="btn btn-dark btn-primary" type="button" onClick={handleSubmit} disabled={!isFormValid}>Register</button>
            </div>

            <div className={`alert alert-danger mt-2 alert-dismissible fade ${registerStatus ? '' : 'show'}`} role="alert">
                <strong>Registeration failed!</strong>{apiError}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={closeMessage} />
            </div>
        </div>
    );
}

export default RegisterationComponent;