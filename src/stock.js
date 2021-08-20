import Graph from './graph/Graph';
import './stock.css';

function Stock() {
  return(
    <div className='stock-wrapper'>
      <p>BASH$</p>
      <Graph />
    </div>
  )
}

export default Stock;