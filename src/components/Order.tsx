import { useState } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import { FishType } from '../App';

interface Props {
    fishes: FishType[];
    orders: FishType[];
    removeFromOrder: (key: number) => void;
}

const Order = (props: Props) => {
    const {fishes, orders, removeFromOrder} = props;

  return (
    <div className="order-wrap">
        <h2>Orders</h2>
        <TransitionGroup component='ul' className="order">
        {/* {orderIds.map(this.renderOrder)} */}
        </TransitionGroup>
        <div className="total">
            {/* <strong>{formatPrice(total)}</strong> */}
        </div>
    </div>
  )
}

export default Order;