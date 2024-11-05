import { useState } from 'react'
import './App.css';
import sampleFishes from './sample-fishes';

import Header from './components/Header';
import Inventory from './components/Inventory';

type Fish = {
  name: string;
  image: string;
  desc: string;
  price: number;
  status: string;
};

function App() {
  const [fishes, setFishes] = useState<Fish[]>();

  const loadSampleFishes = () => {
    setFishes(sampleFishes);
  }

  return (
    <div className="catch-of-the-day">
      <div className="menu">
          <Header tagline= "Fresh Seafood Market"/>
          {/* <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => <Fish key={key} addToOrder={this.addToOrder} index={key} details={this.state.fishes[key]}/>)}
          </ul> */}
      </div>
        {/* <Order fishes={this.state.fishes} orders={this.state.order} removeFromOrder={this.removeFromOrder} /> */}
        <Inventory loadSampleFishes={sampleFishes} fishes={fishes} />
    </div>
  )
}

export default App
