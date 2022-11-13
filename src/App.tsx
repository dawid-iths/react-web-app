import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        School:  {process.env.REACT_APP_SCHOOL}
        </h1>
        <p>
        Envoronment: {process.env.NODE_ENV}
        </p>
      </header> 
    </div>
  );
}

export default App;
