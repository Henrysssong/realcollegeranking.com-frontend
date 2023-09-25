import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Questionnaire() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    // Sample structure
    { id: 1, text: 'Private or Public?', value: '', must: false, importance: 5 },
    // Add more questions as needed
  ]);

  const handleSubmit = async () => {
    // Prepare data for backend
    const data = questions.map(q => ({
      question: q.text,
      answer: q.value,
      must: q.must,
      importance: q.importance
    }));

    try {
      // Assuming your backend has an endpoint /generateRanking to process the questions
      const response = await axios.post('https://your-backend-url/generateRanking', data);
      if (response.data) {
        // Store results in local storage or context for future use
        localStorage.setItem('rankingResults', JSON.stringify(response.data));
        navigate('/results');
      }
    } catch (error) {
      console.error('Error submitting questions:', error);
    }
  };

  return (
    <div>
      <h2>Answer the Questions</h2>
      {questions.map((q, index) => (
        <div key={q.id}>
          <label>{q.text}</label>
          <input
            type="text"
            value={q.value}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].value = e.target.value;
              setQuestions(newQuestions);
            }}
          />
          {/* Add controls for 'must' and 'importance' here */}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Questionnaire;
