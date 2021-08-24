import Graph from '../graph/Graph';
import './stock.css';
import Select from 'react-select'
import data from '../data/data'
import { useState } from 'react';

function Stock() {
  const [crypto, setCrypto] = useState({value: '', label: ''});

  return(
    <div className='stock-wrapper'>
      <div className='search-wrapper'>
        <Select
          placeholder="Search your crypto..."
          options={data}
          onChange={setCrypto}
        />
      </div>
      {crypto.label !== '' && 
      <div>
        <p>{crypto.label} (USD$)</p>
      </div>
      }
      {crypto.value !== '' && 
        <Graph {...crypto}/>
      }
    </div>
  )
}

export default Stock;