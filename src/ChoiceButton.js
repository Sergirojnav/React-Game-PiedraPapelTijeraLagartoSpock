import React from 'react';

const ChoiceButton = ({ choice, handleChoice }) => (
    <button onClick={() => handleChoice(choice)}>{choice}</button>
);

export default ChoiceButton;