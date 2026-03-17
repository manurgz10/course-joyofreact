import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

import Guess from '../Guess';

function GuessList({ guesses, correctAnswer }) {
    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
                <Guess key={num} correctAnswer={correctAnswer} value={guesses[num]} />
            ))}
        </div>
    );
}

export default GuessList;