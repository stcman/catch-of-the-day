import React from 'react';
import { FishType } from '../App';
import EditFishForm from './EditFishForm';
import AddFishForm from './AddFishForm';

type Props = {
  fishes: FishType[];
  loadSampleFishes: () => void;
  updateFish: (key: number, updatedFish: FishType) => void;
  deleteFish: (key: number) => void;
  addFish: (newFish: FishType) => void;
}

const Inventory = (props: Props) => {
  const {fishes, loadSampleFishes, updateFish, deleteFish, addFish} = props;

  return (
    <div className="inventory">
      <h2>Inventory</h2>
      {/* {logout} */}
      {fishes.map((fish, idx) => <EditFishForm key={fish.name} index={idx} fish={fish} updateFish={updateFish} deleteFish={deleteFish} />)}
      <AddFishForm addFish={addFish} loadSampleFishes={loadSampleFishes}/>
      <button onClick={()=> loadSampleFishes()}>Load Sample Fishes</button>
    </div>
  )
}

export default Inventory