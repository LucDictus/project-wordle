// app.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './components/StartPage/StartPage.js';
import HomePage from './components/HomePage/HomePage.js';
import Login from './components/LoginPage/Login/Login.js';
import Registrate from './components/LoginPage/Registrate/Registrate.js';
import GamePage from './components/GamePage/GamePage.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrate" element={<Registrate />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/gamepage" element={<GamePage />} />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;
