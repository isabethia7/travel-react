import logo from './img/logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo_group">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-logo_title__phone">
          8 800 725 32 32
        </p>
        </div>
      </header>
    </div>
  );
}

export default App;
