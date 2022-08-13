import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from '../../hooks/useSignup';
import './Register.css'

const Register = () => {

    const [orgname, setOrgname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [about, setAbout] = useState('');
    const [password, setPassword] = useState('');
    const { signup, isLoading, error } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await signup(orgname, email, phoneNumber, about, password)

    }

    return (
        <>
            <div className="bbbbb">
                <div className="bodyyy">
                    <div className="container">
                        <div className="title">Registration</div>
                        <div className="content">
                            <form onSubmit={handleSubmit}>
                                <div className="user-details">
                                    <div className="input-box">
                                        <span className="details">Organisation Name</span>
                                        <input type="text" name='name' placeholder="Enter Your Organisation's Name" required onChange={(e) => setOrgname(e.target.value)} value={orgname} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Email</span>
                                        <input type="email" name='email' placeholder='Enter Your Email' required onChange={(e) => setEmail(e.target.value)} value={email} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Phone Number</span>
                                        <input type="text" name='phonenumber' placeholder="Enter Your Phone Number" required onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Your about</span>
                                        <input type="text" name='about' placeholder="Example : 1st about, 2nd about..." required onChange={(e) => setAbout(e.target.value)} value={about} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Password</span>
                                        <input type="password" name='password' placeholder='Enter Your Password' required onChange={(e) => setPassword(e.target.value)} value={password} />
                                    </div>
                                </div>
                                <div className="button">
                                    <input type="submit" value="Register" disabled={isLoading} />

                                    {error && <div className='error' style={{ color: 'red'}}>{error}</div>}
                                </div>
                            </form>
                            <div className="text sign-up-text">Already have an account? <Link to='/login' style={{ textDecoration: "none" }}> Sign In</Link></div>
                        </div>
                    </div>
                </div></div>
        </>
    )
}

export default Register