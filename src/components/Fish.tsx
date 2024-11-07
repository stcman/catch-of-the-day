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
      <div className="top">
        <img src={image} alt={name} />
        <h3 className="fish-name">
        {name}
        </h3>
      </div>
      <div className="middle">
        <p className='fish-desc'>{desc}</p>
      </div>
      <div className="bottom">
        <p className="price">{formatPrice(price)}</p>
        <button onClick={handleClick} disabled={!isAvailable}>{isAvailable ? 'Add to Order': 'Sold Out!'}</button>
      </div>
    </li>   
  )
}

export default Fish;