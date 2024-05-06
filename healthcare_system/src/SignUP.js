import React from "react";

const SignUP = () => {
    return (
        <div class="mainLogin">
        <a href="LandingPage.html"><button class = "backButton">Back</button></a>
        <h3 class = "loginHead-3">Choose a username and password</h3>
        <form id="loginForm" onsubmit="">
            <label class="loginLabel" for="first">
                  Username:
              </label>
            <input type="text"
                   id="username"
                   name="first"
                   placeholder="Enter your Username" required></input>
 
            <label class= "loginLabel" for="password">
                  Password:
              </label>
            <input type="password"
                   id="password"
                   name="password"
                   placeholder="Enter your Password" required></input>
 
            <div class="wrap">
                <button class = "loginButton" type="submit"
                        onclick="">
                    Submit
                </button>
            </div>
        </form>
    </div>
    );
};

export default SignUP;