import Graph from '../graph/Graph';
import './stock.css';
import Select from 'react-select'
import data from '../data/data'
import { useState } from 'react';

function Stock() {
  const [state, setState] = useState({value: 'BTC', label: 'Bitcoin'});

  return(
    <div className='stock-wrapper'>
      <div className='search-wrapper'>
        <Select
          placeholder="Search your crypto..."
          options={data}
          onChange={setState}
        />
      </div>
      <p>{state.label}$</p>
      <Graph {...state}/>
    </div>
  )
}

export default Stock;