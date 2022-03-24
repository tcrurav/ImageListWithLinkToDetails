import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router >
  );
}

export default App;
