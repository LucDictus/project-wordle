// leaderboard

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './LeaderBoard.css';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        // statisch voor nu
        const data = [
            { name: 'Player 1', score: 100 },
            { name: 'Player 2', score: 90 },
            { name: 'Player 3', score: 80 },
            { name: 'Player 4', score: 70 },
            { name: 'Player 5', score: 60 }
        ];


        setLeaderboardData(data);
    }, []);

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <ul>
                {leaderboardData.map((entry, index) => (
                    <div key={index} className="leaderboard-entry">
                        <span className="rank">{index + 1}</span>
                        <li className={index === 0 ? 'first' : index === 1 ? 'second' : index === 2 ? 'third' : ''}>
                            <span className="name">{entry.name}</span>
                            <span className="score">{entry.score}pts</span>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

Leaderboard.propTypes = {
    apiUrl: PropTypes.string.isRequired,
};


export default Leaderboard;