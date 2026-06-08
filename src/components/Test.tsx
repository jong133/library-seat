import React, {useState} from "react";

export default function Test() {
    let a : number = 123;
    let b : string = "Welcome to the new Area";

    function add(x:number, y:number): number{
        return x+y;
    }
    const add2 = (x:number,y:number): number =>{
        return x+y;
    }
    let obj : { a:number, b:string } = {
        a: 1, b: "test"
    }
    let arr1: string[] = ['a','b','c'];
    let arr2: number[] = [1,2,3];
    let arr3: [number, number, string] = [123, 456, "one"];

    const x: number = 5;
    const f:true = true;

    type AddType = (a:number, b:number) => number;
    const add3:AddType = (a,b) => a+b;

    type Operation = (a:number, b:number) => number; 
    const sub2:AddType = (a,b) => a-b;
    const multiplt2:AddType = (a,b) => a*b;
    const divide:AddType = (a,b) => a/b;

    interface Person{
        name: string, age: number;
    }
    const person: Person ={
        name: "이정환", age:27
    }

    function func<T>(value: T): T {
        return value;
    }
    interface MyButtonProps {
        id:number, title:string
    }

    function MyButton( {id, title}: MyButtonProps ) {
        return (
            <div>
                <button>{id} {title}</button>
            </div>
        )
    }

    const [count, setCount] = useState<number>(0);
    type Status = "idle" | "loading" | "success"|"err";
    const [status,setStatus] = useState<Status>("idle");

    const [value, setValue] = useState("Init string");

    function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
        setValue(event.currentTarget.value);
    }
    function handleClick(event: React.MouseEvent<HTMLElement>) {
        alert('click');
    }


    return(
        <div>
            <input value={value} onChange={handleChange}></input>
            <p>Value: {value}</p>
            <button onClick={handleClick}>click</button>
            <MyButton id={1} title={"ButtonTS"}/>
            <p>{func<number[]>([4,6,6])}</p>
            <p>{b}</p>
            <p>{divide(52,7)}</p>
            <p>{obj.b}</p>
            <p>모먼트7카좀달라고아</p>
        </div>
    )
}