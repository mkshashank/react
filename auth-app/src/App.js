import React, { useState, createContext, useContext } from "react";

// Authentication Context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const login = (email, password) => {
    if (!email || !password) {
      setErrorMessage("Please fill out both fields.");
      return;
    }

    if (email === "user@example.com" && password === "password") {
      setUser({ email });
      setErrorMessage("");
      alert("Login successful!");
    } else {
      setErrorMessage("Invalid credentials.");
    }
  };

  const register = (email, password) => {
    if (!email || !password) {
      setErrorMessage("Please fill out both fields.");
      return;
    }
    setUser({ email });
    setErrorMessage("");
    alert("Registration successful!");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, errorMessage }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

function AuthForm({ type }) {
  const { login, register, errorMessage } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (type === "login") {
      login(email, password);
    } else {
      register(email, password);
    }
  };

  return (
    <div>
      <h2>{type === "login" ? "Login" : "Register"}</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>{type === "login" ? "Login" : "Register"}</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AuthForm type="login" />
      <AuthForm type="register" />
    </AuthProvider>
  );
}
