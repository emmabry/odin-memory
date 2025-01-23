/* eslint-disable react/prop-types */
export default function GameOver( { restart }) {
    return (
        <div>
        <h1>Game Over</h1>
        <button onClick={restart}>Retry</button>
        </div>
    )
}