import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    return (
        <div className='form-container p-3'>
            <div>
                <h2 className='form-title mt-4'>Login</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to EmaJohn? <Link className='form-link' to={'/signup'}>Create an account</Link>
                </p>
                <div className='or-flex'>
                    <div>━━━━━━━━━━━</div>
                    <div>or</div>
                    <div>━━━━━━━━━━</div>
                </div>
            </div>

        </div>
    );
};

export default Login;