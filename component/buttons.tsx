/*eslint-disable no-eval */
import React, { useState } from "react";
//import {handleClick, controlClick} from '../App';

import "../style.css";

const Buttons = () => {
  
    const[state , setState] = useState("");
    const[preState , setPreState] = useState("");

    const checkMultipleDecimal = (state: String) => {
        var count = 0;
        for(var i=0; i<state.length; i++) {
          if(state.charAt(i)===".") {
            count++;
            if(count>1) return true;
          } else if(state.charAt(i)==="+" || state.charAt(i)==="-" || state.charAt(i)==="*" || state.charAt(i)==="/") {
              count=0;
          }
        }
        return false;
    }
    const handleClick = () => {
        if(state.substr(state.length - 1,state.length)==="+" || 
           state.substr(state.length - 1,state.length)==="-" ||
           state.substr(state.length - 1,state.length)==="*" ||
           state.substr(state.length - 1,state.length)==="/" ||
           state.substr(state.length - 1,state.length)==="%" ||
           checkMultipleDecimal(state)
           ) {
          setState("Wrong Input")
        } else {
          try{
            setPreState(state +"="+ eval(state))
            setState(eval(state))
          } catch(error) {}
        }
    }
    
    const controlClick = (e:any) => {setState(state + e.target.name)}
   

  return (
      <div className="wrapper">
          <div className="input2">{preState}</div>
          <div className="input">{state}</div>
          <button name="CLEAR" onClick={() => setState(state.substr(0, state.length - 1))}>CLEAR</button>
          <button name="AC" onClick={() => {setState("")}}>AC</button>
          <button name="BACK" onClick={() => {setPreState("")}}>BACK</button>
          <button name="*" onClick={controlClick}>*</button>
          <button name="9" onClick={controlClick}>9</button>
          <button name="8" onClick={controlClick}>8</button>
          <button name="7" onClick={controlClick}>7</button>
          <button name="/" onClick={controlClick}>/</button>
          <button name="6" onClick={controlClick}>6</button>
          <button name="5" onClick={controlClick}>5</button>
          <button name="4" onClick={controlClick}>4</button>
          <button name="+" onClick={controlClick}>+</button>
          <button name="3" onClick={controlClick}>3</button>
          <button name="2" onClick={controlClick}>2</button>
          <button name="1" onClick={controlClick}>1</button>
          <button name="-" onClick={controlClick}>-</button>
          <button name="0" onClick={controlClick}>0</button>
          <button name="%" onClick={controlClick}>%</button>
          <button name="." onClick={controlClick}>.</button>
          <button name="=" onClick={handleClick}>=</button>
      </div>
      
  );
}

export default Buttons;
