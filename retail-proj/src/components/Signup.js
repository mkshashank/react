import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (!user.username || !user.email || !user.password || !user.confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Store user details in localStorage
    const userData = { username: user.username, email: user.email, password: user.password };
    localStorage.setItem(user.username, JSON.stringify(userData));

    alert("Signup Successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <input type="text" name="username" placeholder="Enter username" onChange={handleChange} />
      <input type="email" name="email" placeholder="Enter email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Enter password" onChange={handleChange} />
      <input type="password" name="confirmPassword" placeholder="Re-enter password" onChange={handleChange} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
