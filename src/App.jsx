/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Start from './components/Start.jsx'
import Cards from './components/Cards.jsx'

export default function App() {
    const [gameState, setGameState] = useState('start');

    function easyMode() {
        setGameState('easygame');
    }

    function hardMode() {
        setGameState('hardgame');
    }
    

    if (gameState == 'start') {      
        return (
            <Start easyMode={easyMode} hardMode={hardMode} />
        )
    }
    else if (gameState == 'easygame') {
        return (
            <Game mode='easy' />
        )
    } else if (gameState == 'hardgame') {
        return (
            <Game mode='hard' />
        )
    }
}

function Game( { mode }) {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [randomArray, setRandomArray] = useState('');

    if (mode == 'easy') {
        return (
            <>
            <div className="Scoreboard">
                <p>Current Score: {score}</p>
                <p>High Score: {highScore} </p>
            </div>
            <div className="card-container">
                <Cards num={5} />
            </div>
            </>
        )
    } else if (mode == 'hard') {
        return (
            <>
            <div className="Scoreboard">
                <p>Current Score: {score}</p>
                <p>High Score: {highScore}</p>
            </div>
            <div className="card-container">
                <Cards num={10} />
            </div>
            </>
        )
    }
}
