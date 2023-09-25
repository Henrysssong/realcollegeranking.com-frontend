import React from 'react';

function RankingResults() {
  const results = JSON.parse(localStorage.getItem('rankingResults') || '[]');

  return (
    <div>
      <h2>Your Personalized College Ranking</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default RankingResults;
