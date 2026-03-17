import React from 'react';
import Banner from '../Banner';
import RestartButton from '../RestartButton';
function WinnerResult({ numOfGuesses }) {
    return (
    <Banner status="happy">
    <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{numOfGuesses} guesses. </strong>
    </p>
            <RestartButton />
    </Banner>
    )
}

export default WinnerResult;
