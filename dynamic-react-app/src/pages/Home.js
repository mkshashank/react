import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to Retail App</h1>
      <Link to="/signup">
        <button>Register Now</button>
      </Link>
    </div>
  );
};

export default Home;
