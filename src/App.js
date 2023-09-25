import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Questionnaire from './components/Questionnaire';
import RankingResults from './components/RankingResults';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/questionnaire" component={Questionnaire} />
        <Route path="/results" component={RankingResults} />
      </Routes>
    </Router>
  );
}

export default App;
