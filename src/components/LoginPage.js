import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    if (response.profileObj) {
      // Store user data in local storage or context for future use
      localStorage.setItem('user', JSON.stringify(response.profileObj));
      navigate('/questionnaire');
    } else {
      console.error('Google login failed:', response);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      {/* Add email/password login here if needed */}
    </div>
  );
}

export default LoginPage;
