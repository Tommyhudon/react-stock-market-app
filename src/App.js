import './App.css';
import Stock from './components/stock/stock';
import Loader from './loader'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>The legit crypto exchange</p>
      <div className="App-wrapper">
        <Stock />
      </div>
      </header>
    </div>
  );
}

export default App;
