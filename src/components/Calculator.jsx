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
        <button onClick={()=>display("7")} className="btn">7</button>
        <button onClick={()=>display("8")} className="btn">8</button>
        <button onClick={()=>display("9")} className="btn">9</button>
        <button onClick={()=>display("4")} className="btn">4</button>
        <button onClick={()=>display("5")} className="btn">5</button>
        <button onClick={()=>display("6")} className="btn">6</button>
        <button onClick={()=>display("1")} className="btn">1</button>
        <button onClick={()=>display("2")} className="btn">2</button>
        <button onClick={()=>display("3")} className="btn">3</button>
        <button onClick={()=>display(".")} className="btn">.</button>
        <button onClick={()=>display("0")} className="btn">0</button>
        <button className="clear-btn" onClick={reset}>C</button>
        <button className="equal operator" onClick={calculate}>=</button>

      </div>
    </div>
  );
}

export default Calculator;
