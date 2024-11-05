import React, { useState } from 'react';
import { FishType } from '../App';

type Props = {
  loadSampleFishes: () => void;
  addFish: (newFish: FishType) => void;
};

const AddFishForm = (props: Props) => {
  const {addFish} = props;
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [status, setStatus] = useState<string>("available");
  const [desc, setDesc] = useState<string>("");
  const [image, setImage] = useState<string>("/images/hali.jpg");

  const createFish = (e: React.FormEvent) => {
    e.preventDefault();
    const newFish = {
      name,
      price,
      status,
      desc,
      image
    };

    if(name && price && status && desc && image){
      addFish(newFish);
    }
    
    // addFish();
  };

  return (
    <form className="fish-edit" onSubmit={createFish}>
      <input name="name" type="text" placeholder="Name" onChange={(e: React.ChangeEvent) => { const target = e.target as HTMLInputElement; setName(target.value)}} />
      <input name="price" type="text" placeholder="Price" onChange={(e: React.ChangeEvent) => { const target = e.target as HTMLInputElement; setPrice(parseInt(target.value))}} />
      <select name="status" onChange={(e: React.ChangeEvent) => { const target = e.target as HTMLInputElement; setStatus(target.value)}} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" placeholder="Desc" onChange={(e: React.ChangeEvent) => { const target = e.target as HTMLInputElement; setDesc(target.value)}} />
      <input name="image" type="text" placeholder="Image" onChange={(e: React.ChangeEvent) => { const target = e.target as HTMLInputElement; setImage(target.value)}} value={image} />
      <button type="submit">+ Add Fish</button>
      </form>
  )
}

export default AddFishForm;