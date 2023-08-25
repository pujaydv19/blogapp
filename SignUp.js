import React  from "react";
import "./signUp.css";

export default function SignUp() {
  return (
    <div className="signUp">
      <div className="form-container">
        <img className="signUpLogo"  src="logo.jpg" alt=""/>
        <p className="loginPara">
          Sign up to see photos and videos <br /> from your friends
        </p>
        <div>
          <input type="email" name="email" id="email" placeholder="Email"/>
        </div>
        <div>
          <input type="text" name="name" id="name" placeholder="Full Name"/>
        </div>
        <div>
          <input type="text" name="username" id="username" placeholder="Username"/>
        </div>
        <div>
          <input type="password" name="password" id="password" placeholder="Password"/>
        </div>
        <p className="loginPara">
          By signing up, your are agree to our Terms, <br/> pribacy and cookies policy.
        </p>
        <input type="submit" id="submit-btn" value="Sign Up"/>
      </div>
    </div>
  )
}