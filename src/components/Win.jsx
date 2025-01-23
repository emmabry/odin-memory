/* eslint-disable react/prop-types */
export default function Win( { restart }) {
    return (
        <div>
        <h1>You won!</h1>
        <button onClick={restart}>Play again</button>
        </div>
    )
}