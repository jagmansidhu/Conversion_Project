import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerAPICall } from "./AuthService";
import './Register.css'

const RegisterComponent = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegistrationForm = async (e) => {
        e.preventDefault();

        const register = { name, username, email, password };

        console.log(register);

        try {
            const response = await registerAPICall(register);
            console.log(response.data);
            // Redirect to login page after successful registration
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='container'>
            <br /> <br />
            <div>
                <div className='register-container'>
                    <div className='row'>
                        <div>
                            <h2>Register</h2>
                        </div>
                        <div>
                            <form>
                                <div className='label-container'>
                                    <label>Name</label>
                                    <div>
                                        <input
                                            type='text'
                                            name='name'
                                            className='form-control'
                                            placeholder='Enter name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='label-container'>
                                    <label>Email</label>
                                    <div>
                                        <input
                                            type='text'
                                            name='email'
                                            className='form-control'
                                            placeholder='Enter email address'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='label-container'>
                                    <label>Password</label>
                                    <div>
                                        <input
                                            type='password'
                                            name='password'
                                            className='form-control'
                                            placeholder='Enter password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button className="button" onClick={handleRegistrationForm}>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterComponent;