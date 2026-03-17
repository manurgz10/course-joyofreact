import React from 'react';
import Banner from '../Banner';
import RestartButton from '../RestartButton';
function LoserResult({correctAnswer}) {
    return (
    <Banner status="sad">
            <p>Sorry, the correct answer is <strong>{correctAnswer}</strong>.</p>
        <RestartButton/>
    </Banner>
    )
;
}

export default LoserResult;
