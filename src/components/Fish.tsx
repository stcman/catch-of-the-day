import React from 'react';
import { FishType } from '../App';
import { formatPrice } from '../helpers';

type Props = {
  details: FishType;
  index: number;
  addToOrder: (key: number) => void;
};

const Fish = (props: Props) => {
  const {index, addToOrder, details: { image, name, price, desc, status}}  = props;
  // const { image, name, price, desc, status,  } = props.details;
  const isAvailable = status === 'available';

  const handleClick = () => {
    addToOrder(index);
  }

  return (
    <li className="menu-fish">
      <img src={image} alt={name} />
      <h3 className="fish-name">
      {name}
      <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button onClick={handleClick} disabled={!isAvailable}>{isAvailable ? 'Add to Order': 'Sold Out!'}</button>
    </li>   
  )
}

export default Fish;