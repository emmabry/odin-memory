/* eslint-disable react/prop-types */
export default function Start( { easyMode, hardMode } ) {
    return (
        <div className="state">
        <h3>Select Your Difficulty</h3>
        <div className="buttons">
        <button onClick={easyMode}>Easy</button>
        <button onClick={hardMode}>Hard</button>
        </div>
        <div className="links">
        <a href="https://github.com/emmabry/odin-memory">Github</a>
        </div>
        </div>
    )
}