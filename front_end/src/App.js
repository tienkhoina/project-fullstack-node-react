import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home';
import Signin from './component/Signin';
import Signup from './component/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />        {/* Sử dụng element để render component */}
          <Route path="/signin" element={<Signin />} /> {/* Sử dụng element để render component */}
          <Route path="/signup" element={<Signup />} /> {/* Sử dụng element để render component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
