import React, { useState, useRef } from "react";
export default function RefExample1() {
    const inputRef = useRef(null);
    console.log("렌더링");
    const forcusInput = () => {
        inputRef.current.focus();
    };
    return (
    <div>
        <input ref={inputRef} placeholder="여기에 입력"></input>
        <button onClick={forcusInput}>포커싱</button>
    
    </div>
);
}