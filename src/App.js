import React  from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import './App.css';

function App() {

  

  function changeBackground(e) {
    e.target.style.background = 'red';
    e.target.style.bottom = "22px";
    e.target.className = "App-over-button";
  }

  function changeBackground1(e) {
    e.target.style.background = 'white';
    e.target.style.bottom = "2px";
    e.target.className = "App-button";
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="module-border-wrap" >
          <Button className="App-button" onMouseOver={changeBackground}
                  onMouseLeave={changeBackground1}>
            Hover over me!
          </Button>
        </div>
        
      </header>
      
    </div>
  );
}

export default App;
