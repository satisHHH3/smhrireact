import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Redirect, Link } from 'react-router-dom';
import './index.css';

const Login = ({ history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [showErr, setShowErr] = useState(false);

    const onLoginSuccess = (token) => {
        Cookies.set('jwt_token', token, { expires: 30 });
        history.replace('/');
    };

    const onLoginFailure = (err) => {
        setErrMsg(err);
        setShowErr(true);
    };

    const onSubmitUserDetails = async (event) => {
        event.preventDefault();

        const userDetails = {
            username,
            password,
        };

        const url = 'https://cloudconnectcampaign.com/smhri/api/token/';

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails),
        };

        try {
            const response = await fetch(url, options);
            if (response.ok) {
                const data = await response.json();
                onLoginSuccess(data.access);
            } else {
                const data = await response.json();
                onLoginFailure(data.detail);
            }
        } catch (error) {
            console.error('Error occurred while fetching:', error);
            onLoginFailure('Failed to connect to server');
        }
    };

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const inputType = showPassword ? 'text' : 'password';

    const jwt = Cookies.get('jwt_token');
    if (jwt !== undefined) {
        return <Redirect to="/" />;
    }

    return (
        <div className="bg-container">
            <form className="form-container" onSubmit={onSubmitUserDetails}>
                <h1 className="login-head">Login</h1>
                {showErr && <p className="err">*{errMsg}</p>}
                <label htmlFor="user" className="label">
                    USERNAME
                </label>
                <input id="user" type="text" className="input" value={username} onChange={onChangeUsername} />
                <label htmlFor="password" className="label">
                    PASSWORD
                </label>
                <input id="password" type={inputType} className="input" value={password} onChange={onChangePassword} />
                <div className="input-container">
                    <input id="check" type="checkbox" onClick={onClickShowPassword} />
                    <label htmlFor="check" className="check-label">
                        Show Password
                    </label>
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
                <p>
                    Don't have an account? <Link to="/signup" className="link">Signup</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
