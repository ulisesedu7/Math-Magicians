import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import HomePage from './pages/homePage';
import CalculatePage from './pages/calculatePage';
import QuotePage from './pages/quotePage';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatePage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </>
    );
  }
}

export default App;
