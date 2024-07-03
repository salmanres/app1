import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

var mydata = JSON.parse(localStorage.getItem("loggedInUserData")) || [];
const date = new Date();

function LoginModal({ show, handleClose }) {

    const [isLoggedIn, setIsLoggedIn] = useState("true");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [rememberMe, setrememberMe] = useState("false");
    const [loginError, setLoginError] = useState("");

    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    const loginHandle = () => {
        const userMatch = storedUserData.find((d) => d.email === userEmail && d.password === userPassword);

        if (userMatch) {
            alert("Login successful");
            const newData = {
                name: userMatch.name,
                email: userMatch.email, 
                dateTime: date.toLocaleString(),
            }

            mydata.push(newData);
            localStorage.setItem("loggedInUserData", JSON.stringify(mydata));
            
        } else {
            setLoginError("invalid username/password");
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <div className='px-5 shadow rounded'>
                <Modal.Header closeButton>
                    <Modal.Title>LOGIN HERE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder='Email' onChange={(event) => setUserEmail(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder='Password' onChange={(event) => setUserPassword(event.target.value)} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input mt-1" id="exampleCheck1" onChange={(event) => setrememberMe(event.target.value)} />
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-secondary px-5" onClick={loginHandle}>LOGIN</button>
                    {loginError && <p className='text-danger'>{loginError}</p>}

                </Modal.Body>
                <Modal.Footer>
                    <label for="exampleInputPassword1" className="form-label">Don't have an account?</label>
                    <Link variant="info">register here</Link>
                </Modal.Footer>
            </div>
        </Modal>
    );
}


export default LoginModal;


