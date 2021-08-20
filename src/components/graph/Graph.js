import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Graph = props => {

  const [stockData, setStockData] = useState(props);

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setStockData(props);
    const test = axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=${props.value}&market=USD&apikey=3FWUBQSRHDUWSBYQ`);
    console.log(test);
  }, [props]);

  const data = [
    {
      name: '2021',
      uv: 4,
    },
    {
      name: '2022',
      uv: 16,
    },
    {
      name: '2023',
      uv: 64,
    },
    {
      name: '2024',
      uv: 128,
    },
    {
      name: '2025',
      uv: 256,
    },
  ];

  return(
    <div style={{ width: '100%', height: 300, fontSize:16 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
  )
}

export default Graph;