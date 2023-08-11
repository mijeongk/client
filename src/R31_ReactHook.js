import React,{useState, useEffect} from "react";

function R31_ReactHook(props){
    let [contents, setContents] = useState('[이것은 리액트]');
    
    useEffect(()=>{
        console.log('useEffect');
    });

    return(
        <div>
        <h2>{contents}</h2>
        <button onClick={() => setContents('[THIS IS HOOK]')}>버튼</button>
        </div>
    )
}

export default R31_ReactHook;

