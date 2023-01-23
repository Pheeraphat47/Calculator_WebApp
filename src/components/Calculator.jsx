import './Calculator.css';
import { useState } from 'react';

function Calculator() {

    const [inputValue,setIntputValue] = useState('0')

    function display(value) {
        if(inputValue.toString().charAt(0) === "0"){
            setIntputValue(value)
        }else{
            setIntputValue(inputValue+value)
        }
    }

    function reset(){
        setIntputValue("0");
    }

    function calculate(){
        let result = eval(inputValue);
        setIntputValue(result)
    }

  return (
    <div className="calculator">

      <div className="calculator-display">
        <h1>{inputValue}</h1>
      </div>

      <div className="calculator-button">
        <button className="operator" onClick={()=>display("+")}>+</button>
        <button className="operator" onClick={()=>display("-")}>-</button>
        <button className="operator" onClick={()=>display("*")}>x</button>
        <button className="operator" onClick={()=>display("/")}>÷</button>
        <button onClick={()=>display("7")}>7</button>
        <button onClick={()=>display("8")}>8</button>
        <button onClick={()=>display("9")}>9</button>
        <button onClick={()=>display("4")}>4</button>
        <button onClick={()=>display("5")}>5</button>
        <button onClick={()=>display("6")}>6</button>
        <button onClick={()=>display("1")}>1</button>
        <button onClick={()=>display("2")}>2</button>
        <button onClick={()=>display("3")}>3</button>
        <button onClick={()=>display(".")}>.</button>
        <button onClick={()=>display("0")}>0</button>
        <button className="clear-btn" onClick={reset}>C</button>
        <button className="equal operator" onClick={calculate}>=</button>

      </div>
    </div>
  );
}

export default Calculator;
