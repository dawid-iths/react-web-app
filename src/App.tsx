import React from 'react';
import './App.css';
import ClickEventButton from './components/button';
import LogRocket from 'logrocket';
LogRocket.init('igsknz/logrocket-demo-iths');


function App() {
  const ClickMe = () => {
    console.log("Button Clicked");
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ITHS 
        </p>
        <p>Oh noes, knappen är borta! :S</p>
      </header>
    </div>
  );
}

export default App;
