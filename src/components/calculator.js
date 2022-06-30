/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <section className="calContainer">
        <div>
          <h3 className="calResult">0</h3>
        </div>

        <div className="row-1 displayFlex">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="lastBtn">÷</button>
        </div>

        <div className="row-2 displayFlex">
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="lastBtn">x</button>
        </div>

        <div className="row-3 displayFlex">
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="lastBtn">-</button>
        </div>

        <div className="row-4 displayFlex">
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="lastBtn">+</button>
        </div>

        <div className="row-5 displayFlex">
          <button type="button" className="bigger">0</button>
          <button type="button">.</button>
          <button type="button" className="lastBtn">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
