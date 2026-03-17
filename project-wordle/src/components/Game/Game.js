import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import Banner from '../Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WinnerResult from '../WinnerResult';
import LoserResult from '../LoserResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [userAnswer, setUserAnswer] = React.useState('');
    const [guesses, setGuesses] = React.useState([]);
    const [gameStatus, setGameStatus] = React.useState('running');

function sendAnswer(e) {
    e.preventDefault();
    const nextGuesses = [...guesses, userAnswer];

    if (userAnswer === answer) {
        setGameStatus('win');
    }
    else if (userAnswer !== answer && nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
        setGameStatus('lose');
    }
    setGuesses([...guesses, userAnswer]);

    setUserAnswer('')
}
    return <>
        <GuessList guesses={guesses} correctAnswer={answer} />
        {gameStatus === 'win' && <WinnerResult gameStatus={gameStatus} numOfGuesses={guesses.length} />}
        {gameStatus === 'lose' && <LoserResult gameStatus={gameStatus} correctAnswer={answer} />}
        
        <form className="guess-input-wrapper" onSubmit={sendAnswer}>
            <GuessInput gameStatus={gameStatus} userAnswer={userAnswer} setUserAnswer={setUserAnswer} />
        </form>

    </>;
}

export default Game;
