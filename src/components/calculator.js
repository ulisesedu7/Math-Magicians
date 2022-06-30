/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
    };
  }

  setOperation = (button) => {
    const { state } = this;
    this.setState(calculate(state, button));
  }

  render() {
    const { total, next } = this.state;

    return (
      <section className="calContainer">
        <div>
          <h3 className="calResult">{next ?? total ?? 0}</h3>
        </div>

        <div className="row-1 displayFlex">
          <button type="button" onClick={() => this.setOperation('AC')}>AC</button>
          <button type="button" onClick={() => this.setOperation('+/-')}>+/-</button>
          <button type="button" onClick={() => this.setOperation('%')}>%</button>
          <button type="button" onClick={() => this.setOperation('÷')} className="lastBtn">÷</button>
        </div>

        <div className="row-2 displayFlex">
          <button type="button" onClick={() => this.setOperation('7')}>7</button>
          <button type="button" onClick={() => this.setOperation('8')}>8</button>
          <button type="button" onClick={() => this.setOperation('9')}>9</button>
          <button type="button" onClick={() => this.setOperation('x')} className="lastBtn">x</button>
        </div>

        <div className="row-3 displayFlex">
          <button type="button" onClick={() => this.setOperation('4')}>4</button>
          <button type="button" onClick={() => this.setOperation('5')}>5</button>
          <button type="button" onClick={() => this.setOperation('6')}>6</button>
          <button type="button" onClick={() => this.setOperation('-')} className="lastBtn">-</button>
        </div>

        <div className="row-4 displayFlex">
          <button type="button" onClick={() => this.setOperation('1')}>1</button>
          <button type="button" onClick={() => this.setOperation('2')}>2</button>
          <button type="button" onClick={() => this.setOperation('3')}>3</button>
          <button type="button" onClick={() => this.setOperation('+')} className="lastBtn">+</button>
        </div>

        <div className="row-5 displayFlex">
          <button type="button" onClick={() => this.setOperation('0')} className="bigger">0</button>
          <button type="button" onClick={() => this.setOperation('.')}>.</button>
          <button type="button" onClick={() => this.setOperation('=')} className="lastBtn">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
