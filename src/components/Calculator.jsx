function Calculator() {
  return (
    <div className="calculator">

      <div className="calculator-display">
        <h1>0</h1>
      </div>

      <div className="calculator-button">
        <button className="operator">+</button>
        <button className="operator">-</button>
        <button className="operator">x</button>
        <button className="operator">÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>.</button>
        <button>0</button>
        <button className="clear-btn">C</button>
        <button className="equal operator">=</button>

      </div>
    </div>
  );
}

export default Calculator;
