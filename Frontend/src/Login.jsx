import './form.css';
import React, { useState } from "react";
import './form.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar"


const Login = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/login', {email, password})
    .then(result => {
      console.log(result)
      if(result.data === "Success") {
        navigate('/home')
      }
    })
    .catch(err=> console.log(err))
    }

    return ( 
        <div className="navBar">
          <Navbar/>
        <div className="padding">
        <div className="wrapper_box">
        <form onSubmit={handleSubmit}>
          <h2 className="heading">Login</h2>

          <div className="input-field">
            <input 
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            required />
            <label>Enter your email</label>
          </div>
          <div className="input-field">
            <input
             type="password"
             onChange={(e) => setPassword(e.target.value)}
             required />
            <label>Enter your password</label>
          </div>
          <button type="submit">Login</button>
          <div className="forgot_password">
          <a href="#">Forgot password</a>
          </div>
        </form>
          <div className="register">
            <p>Don't have an account? <a href="">Sign up</a></p>
          </div> 
      </div>
      </div>
      </div>
     );
}
 
export default Login;