import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React, { useState, useEffect } from 'react';

const Graph = props => {
  const API_KEY = '3FWUBQSRHDUWSBYQ'
  const API_CALL = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${props.value}&market=USD&apikey=${API_KEY}`;
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch(API_CALL)
      .then((res) => {
          return res.json();
        }
      )
      .then((data) => {
          let tempChartData = [];
          let counter = 7;
          for(let key in data['Time Series (Digital Currency Daily)']) {
            const xAxisValue = key;
            const yAxisValue = data['Time Series (Digital Currency Daily)'][key]['4b. close (USD)'];
            tempChartData.push({name: xAxisValue, uv: parseInt(yAxisValue)});

            counter--;
            if (counter === 0) {
              break;
            }
          }
          tempChartData.reverse();
          setChartData(tempChartData);
        }
      );
  }, [props]);

  return(

    <div style={{ width: '100%', height: 300, fontSize:16 }}>
        <ResponsiveContainer>
          <AreaChart
            data={chartData}
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