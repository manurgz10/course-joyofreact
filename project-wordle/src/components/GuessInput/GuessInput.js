import React from 'react';

function GuessInput({ userAnswer, setUserAnswer, gameStatus }) {

    return <>
        <label htmlFor="guess-input">Enter your guess:</label>
        <input
            id="guess-input"
            disabled={gameStatus !== 'running'}
            value={userAnswer}
            pattern="[A-Za-z]{5}"
            title="Five letter word"
            onChange={(e) => setUserAnswer(e.target.value.toUpperCase())}
        />

    </>;
}

export default GuessInput;
