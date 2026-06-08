import React, {useState} from "react";

export default function NameForm(props) {
    const [value, setValue] = useState('grape');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSumbit = (event) => {
        alert(`선택한 제품: ${value}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSumbit}>
            <label>
                제품을 선택하세요:
                <select value={value} onChange={handleChange}>
                    <option value="xl2586k">모니터</option>
                    <option value="g pro superlight x strike">마우스</option>
                    <option value="steel series gen3">키보드</option>
                    <option value="qck">마우스패드</option>
                </select>
                <input type="text" value={value} onChange={handleChange}/>
            </label>
            <button type="submit">구매</button>
        </form>
    )
}
