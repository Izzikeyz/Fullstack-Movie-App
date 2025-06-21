import React, { useState } from "react";
import './form.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";



const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/register', {name, email, password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err=> console.log(err))
    }

    return ( 
     <div className="navBar">
        <Navbar />
     <div className="padding">
      <div className="wrapper_box">
        <form onSubmit={handleSubmit}>
          <h2 className="heading">Sign up</h2>
          <div className="input-field">
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                required />
            <label>Enter your name</label>
          </div>
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
          <button type="submit">Sign Up</button>
        </form>
        <div className="register">
            <p>Have an account? </p><Link to='/login'>Login</Link>
        </div> 
      </div>
      </div>
      </div>
     );
}
 
export default Signup;