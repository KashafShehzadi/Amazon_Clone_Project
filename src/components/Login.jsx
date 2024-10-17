import React, { useState } from 'react';
import '../CSS/Login.css';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; // Import both functions

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SignIn = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("Please fill in all fields");
            return;
        }

        signInWithEmailAndPassword(auth, email, password) // Use signInWithEmailAndPassword from Firebase v9
            .then((authResult) => {
                navigate("/"); // Navigate to home after successful sign-in
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const Register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password) // Use createUserWithEmailAndPassword from Firebase v9
            .then((authResult) => {
                console.log(authResult);
                navigate("/"); // Navigate to home after successful registration
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt="Amazon Logo"
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={SignIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={Register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;
