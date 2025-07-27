import React, { useState } from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Regsiter = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await axios.post(
        "https://taara-backend.onrender.com/auth/register",
        {
          username,
          email,
          password,
        }
      );
      res.data && navigate("/login");
    } catch (err) {
      setError("Registration failed. Username or email may already be taken.");
    }
  };
  return (
    <>
      <section className="login-container">
        <div className="login-image-container">
          <img src={back} alt="Decorative background" />
        </div>

        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Create an Account</h2>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                required
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Choose a username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

           <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                id="password"
                required
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="button">
              Register
            </button>

            <p className="register-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};
