import React from "react";
import Book from "./Book.jsx"

function Library(props){
    return (
        <div>
            <Book name="파이썬" numOfPage={300}/>
            <Book name="AWS" numOfPage={400}/>
            <Book name="리액트" numOfPage={500}/>
            <Book name="악마" numOfPage={6666666666}/>
        </div>

    );
}
export default Library;