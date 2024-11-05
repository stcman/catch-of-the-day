import { useState } from 'react'
import './App.css';
import sampleFishes from './sample-fishes';

import Header from './components/Header';
import Inventory from './components/Inventory';
import Fish from './components/Fish';
import Order from './components/Order';

export type FishType = {
  name: string;
  image: string;
  desc: string;
  price: number;
  status: string;
};

function App() {
  const [fishes, setFishes] = useState<FishType[]>([]);
  const [order, setOrder] = useState<FishType[]>([]);

  const loadSampleFishes = () => {
    setFishes(sampleFishes);
  }

  const addFish = (newFish: FishType)  => {
    //addfish
    setFishes([...fishes, newFish]);
  }

const updateFish = (key: number, updatedFish: FishType) => {
    // update fish
    let fishesCopy = JSON.parse(JSON.stringify(fishes));
    fishesCopy[key] = updatedFish;
    setFishes(fishesCopy);
}

const deleteFish = (key: number) => {
    // delete fish
    setFishes([...fishes.filter((el, idx )=> idx !== key)]);
}

const addToOrder = (key: number) => {
  const fish = fishes.find((el, idx) => idx === key);
  if(fish) setOrder([...order, fish]);
}

const removeFromOrder = (key: number) => {
  // delete fish
  setOrder([...fishes.filter((el, idx )=> idx !== key)]);
}

  return (
    <div className="catch-of-the-day">
      <div className="menu">
          <Header tagline= "Fresh Seafood Market"/>
          <ul className="fishes">
              {fishes.map((fish, idx) => <Fish key={fish.name} index={idx} details={fish} addToOrder={addToOrder} />)}
          </ul>
      </div>
        <Order fishes={fishes} orders={order} removeFromOrder={removeFromOrder} />
        <Inventory loadSampleFishes={loadSampleFishes} fishes={fishes} updateFish={updateFish} addFish={addFish} deleteFish={deleteFish} />
    </div>
  )
}

export default App
