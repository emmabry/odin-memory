/* eslint-disable react/prop-types */
export default function Start( { easyMode, hardMode } ) {
    return (
        <div className="state">
        <h1>Start</h1>
        <div className="buttons">
        <button onClick={easyMode}>Easy</button>
        <button onClick={hardMode}>Hard</button>
        </div>
        </div>
    )
}