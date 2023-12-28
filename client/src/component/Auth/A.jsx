import React, { useState } from 'react';
import './A.css';// Import the LoadingScreen.css

const A = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [isLoadingLogin, setIsLoadingLogin] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoadingLogin(true);

    console.log(JSON.stringify(formData));

    const response = await fetch('https://registration-h8n9.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: formData }),
    });
    const data = await response.json();
    setIsLoadingLogin(false);
    console.log(data);
    if (data.success) {
      setFormData({
        username: '',
        password: '',
      });
      alert('Login successful');
    } else {
      alert('Login failed');
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [formDataa, setFormDataa] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isLoadingSignup, setIsLoadingSignup] = useState(false);

  const handleSubmits = async (event) => {
    event.preventDefault();
    setIsLoadingSignup(true);

    console.log(JSON.stringify(formDataa));

    const response = await fetch('https://registration-h8n9.onrender.com/push-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: formDataa }),
    });
    const data = await response.json();
    setIsLoadingSignup(false);
    console.log(data);
    if (data.success) {
      setFormDataa({
        username: '',
        email: '',
        password: '',
      });
      alert('Registration successful');
    } else {
      alert('Registration failed');
    }
  };

  const handleChanges = (event) => {
    setFormDataa({
      ...formDataa,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form onSubmit={handleSubmits}>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input
            type="text"
            name="username"
            id="user"
            placeholder="username"
            value={formDataa.username}
            onChange={handleChanges}
            disabled={isLoadingSignup}
          />
          <input
            type="email"
            name="email"
            id="eml"
            placeholder="email"
            value={formDataa.email}
            onChange={handleChanges}
            disabled={isLoadingSignup}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formDataa.password}
            onChange={handleChanges}
            disabled={isLoadingSignup}
          />
          <button type="submit" disabled={isLoadingSignup}>
            Sign Up
          </button>
          
        </form>
      </div>

      <div className="login">
        <form onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            disabled={isLoadingLogin}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            disabled={isLoadingLogin}
          />
          <button type="submit" disabled={isLoadingLogin}>
            Sign In
          </button>
          
        </form>
      </div>
      {isLoadingLogin && <div className="loading-overlay"><div className="loading-spinner"></div></div>}
      {isLoadingSignup && <div className="loading-overlay"><div className="loading-spinner"></div></div>}
    </div>
  );
};

export default A;
