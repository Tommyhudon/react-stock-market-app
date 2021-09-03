import { ResponsiveLine } from '@nivo/line'
import { useEffect } from 'react';
import './Graph.css';

const Graph = props => {

  useEffect(() => {
    //console.log(props);
  }, [props])
  return(
    <div className='graph-wrapper'>
       <ResponsiveLine
          data={[props.data]}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
          }}
          axisLeft={{
              orient: 'left',
              tickSize: 0,
              tickPadding: 10,
              tickRotation: 0,
          }}
          enableGridX={false}
          colors={{ scheme: 'set2' }}
          lineWidth={4}
          enablePoints={false}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor', modifiers: [] }}
          pointLabelYOffset={-12}
          enableArea={true}
          areaBaselineValue={props.data.data[0].y}
          areaOpacity={0.1}
          useMesh={true}
          legends={[]}
          theme={{
            textColor: "#ffffff",
          }}
      />
    </div>
  )
}

export default Graph;