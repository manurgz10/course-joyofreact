import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, correctAnswer }) {
    let splittedWord = checkGuess(value, correctAnswer);
    return (
        <p className="guess">
            {range(5).map((num) => (
                <span key={num} className={`cell ${splittedWord ? splittedWord[num].status : ''}`}>
                    {splittedWord ? splittedWord[num].letter : undefined}
                </span>
            ))}
        </p>
    );
}

export default Guess;