import { useState } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import { FishType } from '../App';
import { formatPrice } from '../helpers';

interface Props {
    fishes: FishType[];
    orders: FishType[];
    removeFromOrder: (key: string) => void;
}

const Order = (props: Props) => {
    const {fishes, orders, removeFromOrder} = props;

    const total = orders.reduce((prevTotal, order) => {
      const count = orders.filter(fish => fish.fishId === order.fishId)?.length;
      const isAvailable = order && order.status === 'available';

      if(isAvailable){
        return prevTotal + order.price;
      }
      return prevTotal;
    }, 0);

    const renderOrder = (fishOrder: FishType) => {
      const fish = fishes.find(fish => fish.fishId === fishOrder.fishId);
      const count = orders.filter(fish => fish.fishId === fishOrder.fishId)?.length;
      const isAvailable = fish && fish.status === 'available';
      const transitionOptions = {
          classNames:'order',
          key: fishOrder.fishId,
          timeout:{enter: 500, exit: 500}
      };
  
      // Make sure fish is loaded before continuing
          if(!fish){
              return null;
          }
  
          if(!isAvailable) {
              return (
              <CSSTransition {...transitionOptions}> {/* <CSSTransition classNames='order' key={key} timeout={{enter: 500, exit: 500}}>*/}
              <li key={fishOrder.fishId}>Sorry {fish ? fish.name : 'fish'} is no longer available.</li>
              </CSSTransition>
              );
          }
          
          return (
          <CSSTransition {...transitionOptions}>
          <li key={fishOrder.fishId}>
          <span>
          <TransitionGroup component='span' className='count'>
              <CSSTransition classNames='count' key={count} timeout={{enter: 500, exit: 500}}>
                  <span>{count}</span>
              </CSSTransition>
          </TransitionGroup>
           lbs {fish.name}
          {formatPrice(count * fish.price)}
          </span>
          <button onClick={() => removeFromOrder(fishOrder.fishId)}>x</button>
          </li>
          </CSSTransition>
          );
      }

  return (
    <div className="order-wrap">
        <h2>Orders</h2>
        <TransitionGroup component='ul' className="order">
        {orders.map(renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
    </div>
  )
}

export default Order;