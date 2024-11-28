import React, { useState } from 'react';
import axios from 'axios';
import  useHistory  from 'react-router-dom';
import {jwtDecode } from 'jwt-decode';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5003/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);  
      const decoded = jwt_decode(response.data.token);
      if (decoded.role === 'admin') {
        history.push('/admin-dashboard'); // Redirect to Admin Dashboard
      } else {
        history.push('/user-dashboard'); // Redirect to User Dashboard
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '10px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', width: '100%' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
