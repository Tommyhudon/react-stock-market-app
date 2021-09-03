import Graph from '../graph/Graph';
import './stock.css';
import Select from 'react-select'
import data from '../data/data'
import { useState, useEffect, useRef } from 'react';

function Stock() {
  const [chartData, setChartData] = useState([]);
  const [crypto, setCrypto] = useState({value: '', label: ''});
  const API_KEY = '3FWUBQSRHDUWSBYQ'
  const API_CALL = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${crypto.value}&market=USD&apikey=${API_KEY}`;
  
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    fetch(API_CALL)
      .then((res) => {
          return res.json();
        }
      )
      .then((data) => {
          let stock = { id: crypto.value, data: []};
          let counter = 7;
          for(let key in data['Time Series (Digital Currency Daily)']) {
            const xAxisValue = key;
            const yAxisValue = data['Time Series (Digital Currency Daily)'][key]['4b. close (USD)'];
           stock.data.push({x: xAxisValue, y: parseInt(yAxisValue)});

            counter--;
            if (counter === 0) {
              break;
            }
          }
          stock.data.reverse();
          setChartData(stock);
          console.log(chartData)
        }
      );
  }, [crypto]);

  return(
    <div className='stock-wrapper'>
      <div className='search-wrapper'>
        <Select
          placeholder="Search your crypto..."
          options={data}
          onChange={setCrypto}
        />
      </div>
      {chartData?.id !== undefined && 
      <div>
        <p>{crypto.label} ({chartData.id})</p>
        <p>{chartData.data[chartData.data.length - 1].y} USD</p>
      </div>
      }
      {chartData?.id !== undefined && 
        <Graph data = {chartData}/>
      }
    </div>
  )
}

export default Stock;