import { useState } from "react";

let Hook=()=>{
        let [num,setNum] =useState(0);
    function increment() {
        setNum(num+1);
    }
    function decrement() {
        if(num>0){
            setNum(num-1);
        }
        else{
            alert("value cant be less than 0")
        }
    }
    return(
        <>
        <button onClick={increment}>inc</button>
        <h1>{num}</h1>
        <button onClick={decrement} >dec</button>
        </>
    )
}

export default Hook;