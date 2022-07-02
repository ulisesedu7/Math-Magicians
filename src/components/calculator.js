/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import '../calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [value, setValue] = useState({ total: null, next: null });

  const setOperation = (button) => {
    setValue(calculate(value, button));
  };

  return (
    <section className="calContainer">
      <div>
        <h3 className="calResult">{value.next ?? value.total ?? 0}</h3>
      </div>

      <div className="row-1 displayFlex">
        <button type="button" onClick={() => setOperation('AC')}>AC</button>
        <button type="button" onClick={() => setOperation('+/-')}>+/-</button>
        <button type="button" onClick={() => setOperation('%')}>%</button>
        <button type="button" onClick={() => setOperation('÷')} className="lastBtn">÷</button>
      </div>

      <div className="row-2 displayFlex">
        <button type="button" onClick={() => setOperation('7')}>7</button>
        <button type="button" onClick={() => setOperation('8')}>8</button>
        <button type="button" onClick={() => setOperation('9')}>9</button>
        <button type="button" onClick={() => setOperation('x')} className="lastBtn">x</button>
      </div>

      <div className="row-3 displayFlex">
        <button type="button" onClick={() => setOperation('4')}>4</button>
        <button type="button" onClick={() => setOperation('5')}>5</button>
        <button type="button" onClick={() => setOperation('6')}>6</button>
        <button type="button" onClick={() => setOperation('-')} className="lastBtn">-</button>
      </div>

      <div className="row-4 displayFlex">
        <button type="button" onClick={() => setOperation('1')}>1</button>
        <button type="button" onClick={() => setOperation('2')}>2</button>
        <button type="button" onClick={() => setOperation('3')}>3</button>
        <button type="button" onClick={() => setOperation('+')} className="lastBtn">+</button>
      </div>

      <div className="row-5 displayFlex">
        <button type="button" onClick={() => setOperation('0')} className="bigger">0</button>
        <button type="button" onClick={() => setOperation('.')}>.</button>
        <button type="button" onClick={() => setOperation('=')} className="lastBtn">=</button>
      </div>
    </section>
  );
};

export default Calculator;
