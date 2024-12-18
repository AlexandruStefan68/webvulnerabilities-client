import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import FileAnalysis from './components/analizer';
import Logs from './components/logs';
import SecurityRules from './components/rules';
import LearningEnvironment from './components/learning';
import Navbar from './components/navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<LearningEnvironment />} />
          <Route path="/analyze" element={<FileAnalysis />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/rules" element={<SecurityRules />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
