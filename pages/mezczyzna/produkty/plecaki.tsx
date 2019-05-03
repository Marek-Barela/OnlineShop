import React from 'react';
import Backpacks from '../../../components/man/Backpacks';
import { fetchProducts } from '../../../features/maleProductsBackpacks/actions';
import getStore from '../../../features/redux/selectors';
import { RootAction } from '../../../features/redux/root-actions';
import { RootState } from '../../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const BackpacksPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Backpacks />
    </div>
  );
};

BackpacksPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchProducts())
  return {};
};

export default BackpacksPage;
