import React from 'react';
import Jewelry from '../../../components/woman/Jewelry';
import { fetchProducts } from '../../../features/femaleProductsJewelry/actions';
import getStore from '../../../features/redux/selectors';
import { RootAction } from '../../../features/redux/root-actions';
import { RootState } from '../../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const JewelryPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Jewelry />
    </div>
  );
};

JewelryPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchProducts())
  return {};
};

export default JewelryPage;
