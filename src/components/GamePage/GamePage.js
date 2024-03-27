import React, { useState, useRef, useEffect } from 'react';
import Navigation from '../Navigation/Navigation.js';
import "./GamePage.css";

async function randomWord() {
    try {
      const response = await fetch('https://ed25-145-107-233-132.ngrok-free.app/wordle/word', {
        method: 'GET',
        headers: {
          'x-api-key': 'yced0OaoW4SQ54Om9j57a6WYGGVlLgiH'
        }
      });
      const data = await response.json();
      console.log(data.message.toUpperCase());
      return data.message.toUpperCase();
    } catch (error) {
      console.error('Error fetching random word:', error);
      return null;
    }
  }
  
const GamePage = () => {
    const [wordToGuess, setWordToGuess] = useState('');
    const [guesses, setGuesses] = useState(Array(5).fill(''));
    const [feedbacks, setFeedbacks] = useState([]);
    const [result, setResult] = useState(null);
    const [chances, setChances] = useState(5);
    const [isGameOver, setIsGameOver] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
        async function initializeGame() {
        const word = await randomWord();
        if (word) {
            setWordToGuess(word);
        }
        }
        initializeGame();
    }, []);
  
    const handleInputChange = (index, event) => {
      const value = event.target.value.toUpperCase();
      const newGuesses = [...guesses];
      newGuesses[index] = value.slice(0, 1); // Only allow one letter
    
      // Move focus to the previous input if the current input is empty and not the first input
      if (value.length === 0 && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    
      // Update guesses state
      setGuesses(newGuesses);
    
      // Move focus to the next input if the current input is not the last input and has a value
      if (value.length > 0 && index < 4) {
        inputRefs.current[index + 1].focus();
      }
    };
    
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      guess();
    }
  }

  const guess = () => {
    if (isGameOver || guesses.includes('')) return;
    const guessWord = guesses.join('');
    const feedback = checkGuess(guessWord);
    const newFeedbacks = [...feedbacks, { guess: guessWord, feedback }];
    setFeedbacks(newFeedbacks);
    if (guessWord === wordToGuess || chances === 1) {
      setIsGameOver(true);
      setResult(guessWord === wordToGuess ? `` : `Sorry, you're out of chances. The word was ${wordToGuess}`);
    } else {
      setChances(chances - 1);
      setGuesses(Array(5).fill(''));
      inputRefs.current[0].focus();
    }
  };

  const checkGuess = (guessWord) => {
    let feedbackArr = [];
    let tempWordToGuess = wordToGuess.split('');

    for (let i = 0; i < guessWord.length; i++) {
      if (guessWord[i] === tempWordToGuess[i]) {
        feedbackArr.push('green');
        tempWordToGuess[i] = null;
      } else if (tempWordToGuess.includes(guessWord[i])) {
        feedbackArr.push('yellow');
        tempWordToGuess[tempWordToGuess.indexOf(guessWord[i])] = null;
      } else {
        feedbackArr.push('white');
      }
    }

    return feedbackArr;
  };

  return (
    <div className='GamePage-container'>
      <Navigation />
      <div className='container'>
        <h2>Guess the Word (You have {chances} chances left)</h2>
        <div className='guesses'>
          <div className="guess-inputs">
            {guesses.map((guess, index) => (
              <input
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              value={guess}
              onChange={(e) => handleInputChange(index, e)}
              onKeyPress={handleKeyPress} // Handle "Enter" key press
              maxLength={1}
              disabled={isGameOver}
              />
              ))}
          </div>
          <div className="guess-feedbacks">
            {feedbacks.map((item, index) => (
              <div style={{ display: "flex", justifyContent: "center" }} key={index}>
                {item.guess.split('').map((letter, i) => (
                  <span key={i} style={{backgroundColor: item.feedback[i]}} className="feedback-letter">
                    {letter}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        {result && <div>{result}</div>}
        <button onClick={guess} disabled={isGameOver}>Guess</button>
                
      </div>
    </div>
  );
};

export default GamePage;
