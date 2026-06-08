import React, { useState, useMemo} from "react";

function BigSquare() {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);


    const slowSquare = (num) => {
        console.log('계산 중...');
        let result = 0;
        for (let i=0; i<2500000000; i++){
            result = num * num;
        }
        return result;
    };
    const squared = useMemo(() => slowSquare(number),[number]);

    return(
        <div>
            <h2>느린 제곱 계산기</h2>
            <input
                type="number"
                volue={number}
                onChange={(e) => setNumber(Number(e.target.value))}
                />
                <p>제곱 결과: {squared}</p>
                <p>{count}</p>
                <button onClick={() => setCount(count+1)}>+1</button>
        </div>
    );
}

export default BigSquare;