import React, {useRef} from "react";
import MyInput from "./MyInput";

const App = () => {
    const inputRef=useRef(null);
    const focusInput=()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    };
    return(
        <div>
            <h1>Using ref as a Prop in React 19</h1>
            <MyInput placeholder="Type Something..." ref={inputRef}/>
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}

export default App;