import React, {useState} from "react";

export default function MyBUtton() {
    const [btnStr,setBtnStr] = useState("클릭");
    const [isChecked, setIsChecked] = useState(false);
    const [isConfirmed, setIsConfirmed] =useState(false);

    function handleClick(event) {
        console.log(event);
        setBtnStr(btnStr + "*");
    }

    const handleCheckboxChange = (event) => {
        console.log(event.target.checked);
        setIsChecked(!isChecked);
    }
    const handleConfirm = () => {
        setIsConfirmed(prev => !prev)
    }

    return(
        <div>
            <button onClick={handleClick}>{btnStr}</button>
            <input type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                />
                <button onClick={handleConfirm} disabled={isConfirmed}
                >

                    {isConfirmed ? "확인됨" : "확인하기"}
                </button>
        </div>
    );
}