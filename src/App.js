import './App.css';
import SearchBar from './search/search';
import Stock from './stock';
import Loader from './loader'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>The legit crypto exchange</p>
      <div className="App-wrapper">
        <SearchBar />
        <Stock />
      </div>
      </header>
    </div>
  );
}

export default App;
