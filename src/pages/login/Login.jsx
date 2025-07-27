import React, { useContext, useState } from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post(
        "https://taara-backend.onrender.com/auth/login",
        {
          username: userRef.current.value,
          password: passRef.current.value,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGINFAILED" });
      setError("Login failed. Please check your username and password.");
    }
  };

  return (
    <section className="login-container">
      <div className="login-image-container">
        <img src={back} alt="Decorative background" />
      </div>

      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login to Your Account</h2>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
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

          <button className="button" type="submit" disabled={isFetching}>
            {isFetching ? "Logging In..." : "Log In"}
          </button>

          <p className="register-link">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};
