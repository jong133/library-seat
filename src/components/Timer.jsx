import React, { useState, useEffect } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(()=> {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000);
        console.log(count);
}, [count, isRunning])
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={ () => { 
                setIsRunning(!isRunning);}}>
            {isRunning ? 'STOP' : 'START'}
            </button>
        </div>
    )
}