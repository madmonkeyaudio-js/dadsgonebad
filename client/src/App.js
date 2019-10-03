import React from 'react';
import './App.css';
import Content from './Content'
import Header from './Header'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
      <Router>
      <div className="App">
        <Header />
          <Content />
      </div>
      </Router>
  );
}

export default App;
