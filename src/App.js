// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './components/StartPage/StartPage';
import Login from './components/LoginPage/Login/Login';
import Registrate from './components/LoginPage/Registrate/Registrate';
import GamePage from './components/GamePage/GamePage';
import Leaderboard from './components/Leaderboard/LeaderBoard.js';
import useToken from './api/useToken';
function App() {
  const { token, setToken } = useToken();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/registrate" element={<Registrate />} />
          <Route path="/gamepage" element={<GamePage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
