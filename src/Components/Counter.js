import { useState } from 'react';

const Counter = ({ teamName }) => {
    const [score, setScore] = useState(0);
    return (
        <div>
            <div>{teamName}</div>
            <div>{score}</div>
            <button onClick={ () => { setScore(score + 1) } }>+1</button><br></br>
            <button onClick={ () => { setScore(score + 2) } }>+2</button><br></br>
            <button onClick={ () => { setScore(score + 3) } }>+3</button><br></br>
        </div>
    );
};
export {Counter};