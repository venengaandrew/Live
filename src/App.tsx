import React from 'react';
import logo from './logo.jpg';
import './App.css';

/**
 * The App function returns a JSX element representing the structure of a React component.
 * @returns The App component is returning a JSX element.
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://links.drewvpopc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Drewvpopc Links
        </a>
      </header>
    </div>
  );
}


export default App;


