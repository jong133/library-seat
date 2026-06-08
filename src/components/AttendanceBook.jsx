import React from "react";

const students = [
    {
        id: 1,
        name: "이준게이",
    },
    {
        id: 2,
        name: "이준으로 이행시 하겠습니다",
    },
    {
        id: 3,
        name: "이름모를 아이의 이름이",
    },
    {
        id: 4,
        name: "leejun이였엉",
    },
];
export default function AttendaceBook(props) {
    return (
        <ul>
            {students.map((student, index)=>{
                return <li key={student.id}>
                    {student.id}번 {student.name}
                </li>
            })

            }
        </ul>
    )
}