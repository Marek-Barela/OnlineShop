import React from 'react';
import Jeans from '../../../components/man/Jeans';
import { fetchProducts } from '../../../features/maleProductsJeans/actions';
import getStore from '../../../features/redux/selectors';
import { RootAction } from '../../../features/redux/root-actions';
import { RootState } from '../../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const JeansPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Jeans />
    </div>
  );
};

JeansPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchProducts())
  return {};
};

export default JeansPage;
