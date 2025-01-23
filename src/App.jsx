/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Start from './components/Start.jsx'
import Card from './components/Card.jsx'
import generatePokemonArray from './scripts/generatePokemonArray.jsx'
import GameOver from './components/GameOver.jsx';
import Win from './components/Win.jsx';

export default function App() {
    const [gameState, setGameState] = useState('start');
    const [highScore, setHighScore] = useState(0);

    function easyMode() {
        setGameState('easygame');
    }

    function hardMode() {
        setGameState('hardgame');
    }

    function restart() {
        setGameState('start');
    }
    

    if (gameState == 'start') {      
        return (
            <Start easyMode={easyMode} hardMode={hardMode} />
        )
    }
    else if (gameState == 'easygame') {
        return (
            <Game num={5} gameState={gameState} setGameState={setGameState} highScore={highScore} setHighScore={setHighScore} />
        )
    } else if (gameState == 'hardgame') {
        return (
            <Game num={10} gameState={gameState} setGameState={setGameState} highScore={highScore} setHighScore={setHighScore} />
        )
    } else if (gameState == 'gameover') {
        return (
            <GameOver restart={restart}/>
        )
    } else if (gameState == 'win') {
        return (
            <Win restart={restart}/>
        )
    }   
}

function Game( { num, gameState, setGameState, highScore, setHighScore } ) {
    const [score, setScore] = useState(0);
    const [randomArray, setRandomArray] = useState('');
    const [pokemon, setPokemon] = useState([]);
    const [clickedPokemon, setClickedPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
            const data = await generatePokemonArray(num);
            setPokemon(data);
            setRandomArray(data);
            setIsLoading(false);
        };

        fetchPokemon();
    }, [num]);

    function shuffle(pokemon) {
        let copyList = pokemon
        let currentIndex = copyList.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [copyList[currentIndex], copyList[randomIndex]] = [
        copyList[randomIndex], copyList[currentIndex]];
    }
    setRandomArray(copyList);
    }

    function handleLogic(id) {
        let currentPokemon = [...clickedPokemon];
        if (clickedPokemon.includes(id)) {
            if (score > highScore) {
                setHighScore(score);
            }
            setGameState('gameover');
        } else {
            setScore(score + 1);
            setClickedPokemon([...clickedPokemon, id]);
            currentPokemon = [...clickedPokemon, id];
            shuffle(pokemon)
        }
        if (currentPokemon.length == num) {
            setScore(score + 1)
            let helperScore = score + 1
            if (helperScore > highScore) {
                setHighScore(helperScore);
            }
            setGameState('win');
        }
        if (gameState == 'win' || gameState == 'gameover') {
            setScore(0);
            setClickedPokemon([]);
        }
    }

    if (isLoading) {
        return <p>Loading Pokémon...</p>;
    } else {
        return (
            <>
            <div className="Scoreboard">
                <p>Current Score: {score}</p>
                <p>High Score: {highScore} </p>
            </div>
            <div className="card-container">
                {randomArray.map((poke) => (
                    <div key={poke.id} className="pokemon-card" onClick={() => handleLogic(poke.id)}>
                    <Card key={poke.id} item={poke} />
                    </div>
            ))}
            </div>
            </>
            )
    }
}
