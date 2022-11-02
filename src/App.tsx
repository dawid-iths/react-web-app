import React from 'react';
import './App.css';
import ClickEventButton from './components/button';
import FragmentExample from './components/FragmentExample';
import CdnImage from './components/ImageFromCDN';
// import LogRocket from 'logrocket';
// LogRocket.init('igsknz/logrocket-demo-iths');


function App() {
  const ClickMe = () => {
    console.log("change log text");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          ITHS 
        </h1>
        <FragmentExample></FragmentExample>
        <CdnImage imgUrl="https://res.cloudinary.com/ql-cdn-dev/image/upload/w_300,h_200,c_scale/MIT-Coding-Brain-01-press_0.jpg"></CdnImage>
        <ClickEventButton onClick={ClickMe}>Klicka!</ClickEventButton>
      </header>
    </div>
  );
}

export default App;
