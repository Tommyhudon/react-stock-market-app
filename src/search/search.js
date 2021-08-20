import { useState, useEffect } from 'react';
import axios from 'axios';
import  './search.css'
import Select from 'react-select'
import data from '../data/data'

function SearchBar() {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [selectedStock, setSelectedStock] = useState('');

  useEffect(() => {
    console.log(selectedStock);
  }, [selectedStock]);

  useEffect(() => {
    // const test = axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=3FWUBQSRHDUWSBYQ`);
    console.log('test');
    setResults( [
      { value: 'doge', label: 'DOGE' },
      { value: 'moon', label: 'MOON' },
      { value: 'bash', label: 'BASH' },
    ])
  }, [search]);
  console.log(data)
  return(
    <div className='search-wrapper'>
      <Select
        placeholder="Search your crypto..."
        defaultValue={results}
        onChange={setSelectedStock}
        onInputChange={setSearch}
        options={data}
      />
    </div>
  );
  
}
 

export default SearchBar;