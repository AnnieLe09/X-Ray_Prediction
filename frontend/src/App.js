import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import PredictPage from "./components/PredictPage";
import LogInPage from "./components/LogInPage";
import SignUpPage from "./components/SignUpPage";
import HistoryPage from "./components/HistoryPage";

export class App extends Component {
  render() {
    return (
      <div >
       
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" exact element={<PredictPage />} />
              <Route path="/login" element={<LogInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/history" element={<HistoryPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
