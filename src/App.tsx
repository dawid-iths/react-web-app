import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickEventButton from './components/button';

function App() {
  const ClickMe = () => {
    console.log("Button Clicked");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ITHS 
        </p>
        <ClickEventButton onClick={ClickMe}>Klicka!</ClickEventButton>
      </header>
    </div>
  );
}

export default App;
