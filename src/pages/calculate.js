import React from "react";
import Calculator from "../components/calculator";

class CalculatePage extends React.PureComponent {
  render() {
    return (
      <div className="calculate-container">
        <h1>Let's do some Math!</h1>
        <Calculator />
      </div>
    );
  }
}

export default CalculatePage;