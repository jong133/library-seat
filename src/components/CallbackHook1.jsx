import React, {useState,useEffect, useCallback} from "react";

export default function CallbackHook1() {
    const [count, setCount] = useState(0);

    const func = useCallback(() => {
        console.log("함수 실행");
    },[]);

    useEffect(() => {
        console.log("useEffect 실행")
    },[func]);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <button onClick={func}>함수 실행</button>
        </div>
    );
}