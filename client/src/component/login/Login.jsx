import React, { useState } from 'react';
import './Login.css'

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false); // Add isLoading state
    const [isError, setIsError] = useState(false); // Add isError state

    const handleSubmit = async (event) => { // Add async keyword
        event.preventDefault();
        // Check if any field is empty
        if (Object.values(formData).some(value => value === '')) {
            setIsError(true); // Set isError to true if any field is empty
            return;
        }

        setIsLoading(true); // Set isLoading to true when form is submitted
        console.log(JSON.stringify(formData));

        // Simulate server response delay
       
        const response = await fetch('https://registration-h8n9.onrender.com/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text:(formData) }),
          });
          const d = await response.json();
          setIsLoading(false);
          console.log(d);
          if (d.success) {
            setFormData({
                username: '',
                password: ''
            });
            alert('Login successful'); // Add alert on successful registration
        }
        else{
            alert('Login failed'); // Add alert on successful registration
        }
        }
        // Simulate server respons
       


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <>
            {!(isLoading) && <form className="for" onSubmit={handleSubmit}>
                <h1 className='reg'>Login</h1>
                <input className='inp' type="text" name="username" id="username" placeholder="username" value={formData.username} onChange={handleChange} />
                <input className='inp' type="password" name="password" id="password" placeholder="password" value={formData.password} onChange={handleChange} />
                <button className='but' type="submit">Sign In</button>
                {isError && <div className='error-message'>Please fill in all fields</div>}
            </form>}
            {isLoading && <div className='loading-screen'><div className='loading-spinner'></div></div>}
            
        </>
    )
}

export default Login;
