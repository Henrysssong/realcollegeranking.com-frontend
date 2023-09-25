import React from 'react';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigate = useNavigate();

  const handleGenerateRanking = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome to Real College Ranking</h1>
      <button onClick={handleGenerateRanking}>Generate Ranking</button>
    </div>
  );
}

export default LandingPage;
