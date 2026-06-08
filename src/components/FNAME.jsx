import React, {useState} from "react";

export default function NameForm(props) {
    const [gender, setGender] = useState('남자');
    const [name, setName] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }
    const handleSumbit = (event) => {
        alert(`입력한 이름: ${name}, ${gender}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSumbit}>
            <label>
                과일을 선택하세요:
                <select value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
                <input type="text" value={value} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}