/* eslint-disable no-undef */
import React from 'react';
function RestartButton() {
    return <div>
        <button onClick={() => globalThis.location.reload()}>Restart Game</button>
    </div>;
}

export default RestartButton;
