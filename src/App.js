import './App.css';
import Stock from './components/stock/stock';
import Loader from './loader'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The Cryptbro</p>
      </header>
      <div className="App-wrapper">
          <Stock />
      </div>
    </div>
  );
}

export default App;
