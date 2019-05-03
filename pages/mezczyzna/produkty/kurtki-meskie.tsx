import React from 'react';
import Jacket from '../../../components/man/Jacket';
import { fetchProducts } from '../../../features/maleProductsJacket/actions';
import getStore from '../../../features/redux/selectors';
import { RootAction } from '../../../features/redux/root-actions';
import { RootState } from '../../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const JacketPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Jacket />
    </div>
  );
};

JacketPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchProducts())
  return {};
};

export default JacketPage;
