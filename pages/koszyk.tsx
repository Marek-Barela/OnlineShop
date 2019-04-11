import React from 'react';
import Cart from '../components/cart/Cart';
import { NextFunctionComponent } from 'next';

const CartPage: NextFunctionComponent<{}> = () => {
  return (
    <div>
      <Cart />
    </div>
  );
};

export default CartPage;
