import React from 'react';
import Home from '../components/home/Home';
import * as Language from '../features/lang/pl';
import getStore from '../features/redux/selectors';
import { RootAction } from '../features/redux/root-actions';
import { RootState } from '../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const products: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Home {...Language} />
    </div>);
};

products.getInitialProps = async (store) => {
  const action = getStore(store)
  //action.dispatch(fetchCounter());
  return {};
};

export default products;
