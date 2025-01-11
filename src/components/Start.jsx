/* eslint-disable react/prop-types */
export default function Start( { easyMode, hardMode } ) {
    return (
        <div>
        <h1>Start</h1>
        <button onClick={easyMode}>Easy</button>
        <button onClick={hardMode}>Hard</button>
        </div>
    )
}