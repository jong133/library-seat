import React, {useEffect, useState} from "react"
import "../styles.css";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        console.log(count);
    }, [count])

    return(
        <div>
            <p>총 {count}번 클릭</p>
            <button onClick={ ()=>{
                setCount(prev => prev+1);
                setCount(prev => prev+1);

                console.log(count);
            }
            }
            
            >
                클릭
            </button>
        </div>
    )



}