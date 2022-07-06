import React from 'react';
import Calculator from '../components/calculator';

class CalculatePage extends React.PureComponent {
  render() {
    return (
      <div className="calculate-container">
        <h2>Let&lsquo;s do some Math!</h2>
        <Calculator />
      </div>
    );
  }
}

export default CalculatePage;
