import React, { useState } from 'react';
import { FishType } from '../App';

type Props = {
  fish: FishType;
  index: number;
  deleteFish: (key: number) => void;
  updateFish: (key: number, updatedFish: FishType) => void;
}

const EditFishForm = (props: Props) => {
  const {fish: {name, price, status, desc, image}, index, deleteFish, updateFish} = props;
  const handleChange = (e: React.ChangeEvent) => {
  const fishCopy = JSON.parse(JSON.stringify(props.fish));
  const target = e.target as HTMLInputElement;

  fishCopy[target.name] = target.value;
  updateFish(index, fishCopy);
  };

  return (
    <div className="fish-edit">
      <input name="name" type="text" onChange={handleChange} value={name}/>
      <input name="price" type="text" onChange={handleChange} value={price}/>
      <select name="status" onChange={handleChange} value={status} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" onChange={handleChange} value={desc}/>
      <input name="image" type="text" onChange={handleChange} value={image} disabled />
      <button onClick={() => deleteFish(index)}>Remove Fish</button>
      </div>
  )
}

export default EditFishForm;