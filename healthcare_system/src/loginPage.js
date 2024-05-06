import React, {useState} from "react";

const LoginPage = () => {

    const[userId, setUserId]=useState('');
    const[password, setPassword]=useState('');

    function handleLogin(event){
        event.preventDefault();
        console.log('clicked');

        let userData = {
            userId:userId,
            password:password
        }

        fetch("/api/login", {
            method: "post",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)

        }).then(response=>response.json()).then(data=>{
            console.log(data);
        })
    }

    return (
        <div className="mainLogin">
            <a href="LandingPage.html"><button className="backButton">Back</button></a>
            <h3 className="loginHead-3">Enter your login credentials</h3>
            <form id="loginForm" onSubmit={handleLogin}>
                <label className="loginLabel">
                    Username:
                </label>
                <input
                    onChange={e=>setUserId(e.target.value)}
                    type="text"
                    id="username"
                    name="first"
                    placeholder="Enter your Username"
                    required
                />

                <label className="loginLabel" htmlFor="password">
                    Password:
                </label>
                <input
                    onChange={e=>setPassword(e.target.value)}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your Password"
                    required
                />

                <div className="wrap">
                    <button className="loginButton" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;