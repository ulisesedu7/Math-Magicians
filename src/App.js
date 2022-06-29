/* eslint-disable react/prefer-stateless-function */
import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Calculator from './components/calculator';

class App extends React.Component {
  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
