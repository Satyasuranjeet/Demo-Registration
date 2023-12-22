
import './App.css';
import Signup from './component/signup/Signup';
import Login from './component/login/Login';
import { useState } from 'react';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showCoin, setShowCoin] = useState(true);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
    setShowCoin(false);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
    setShowSignup(true);
    setShowCoin(false);
  };

  return (
    <div className="App">
      {showCoin && (
        <div className="coin">
          <button className="login-button" onClick={handleLoginClick}>Login</button>
          <button className="signup-button" onClick={handleSignupClick}>Signup</button>
        </div>
      )}
      {showLogin && <Login />}
      {showSignup && <Signup />}
    </div>
  );
}

export default App;
