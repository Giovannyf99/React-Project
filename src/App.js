import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import Dictionary from './Dictonary';
import RandomWordGenerator from './RandomWordGenerator';

const App = () => {
  return (
    <>
    <Router>
      <div>
        <div className="container mx-auto">
          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/dictionary" element={<Dictionary/>} />
          <Route path="/random-word-generator" element={<RandomWordGenerator/>} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
};

export default App;
