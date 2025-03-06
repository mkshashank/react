import React, { useState, useContext, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";


// Authentication Context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password, navigate) => {
    if (email === "user@example.com" && password === "password") {
      setIsAuthenticated(true);
      navigate("/"); // Redirect to Home Page
    } else {
      alert("Invalid Credentials");
    }
  };

  const logout = (navigate) => {
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to Login Page
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, navigate);
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const HomePage = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Welcome to Home Page</h2>
      <button onClick={() => logout(navigate)}>Logout</button>
    </div>
  );
};

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
