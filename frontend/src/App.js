import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import PredictPage from "./components/PredictPage";

export class App extends Component {
  render() {
    return (
      <div className="page">
        <Navbar />
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" exact element={<PredictPage />} />
              <Route path="/login" element={<PredictPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
