import React, { useState } from 'react';
import ChoiceButton from './ChoiceButton';
import { CHOICES, getWinner } from './utils';
import './App.css';

const Game = () => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [winner, setWinner] = useState(null);

    const handleChoice = (choice) => {
        const computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
        setPlayerChoice(choice);
        setComputerChoice(computerChoice);
        setWinner(getWinner(choice, computerChoice));
    };

    return (
        <div>
            <h1>Piedra, Papel, Tijeras, Lagarto, Spock</h1>
            <p>Tu eliges: {playerChoice}</p>
            <p>La computadora eligió: {computerChoice}</p>
            {winner ? <p>{winner}</p> : null}
            {CHOICES.map((choice) => (
                <ChoiceButton key={choice} choice={choice} handleChoice={handleChoice} />
            ))}
        </div>
        
    );
};

export default Game;