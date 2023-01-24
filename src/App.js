// import logo from './logo.svg';
import './App.css';
// import User from './user';
// import Dashboard from './dashboard';
import Thumbnail from './youTubeCard/thumbnail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        {/* <User  button="my name " data={{name: "gyanashree"}}/>
        <Dashboard  text="function component"/> */}
        <Thumbnail />
      </header>
    </div>
    
  );
}

export default App;
