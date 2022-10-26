import React from 'react';
import './App.css';
import ClickEventButton from './components/button';
import LogRocket from 'logrocket';
LogRocket.init('igsknz/logrocket-demo-iths');


function App() {
  const ClickMe = () => {
    console.log("log log log");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          ITHS 
        </h1>
        <ClickEventButton onClick={ClickMe}>Klicka!</ClickEventButton>
      </header>
    </div>
  );
}

export default App;
