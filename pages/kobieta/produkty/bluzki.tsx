import React from 'react';
import Blouses from '../../../components/woman/Blouses';
import { fetchProducts } from '../../../features/femaleProductsBlouses/actions';
import getStore from '../../../features/redux/selectors';
import { RootAction } from '../../../features/redux/root-actions';
import { RootState } from '../../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const BlousesPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Blouses />
    </div>
  );
};

BlousesPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchProducts())
  return {};
};

export default BlousesPage;
