import React from 'react';
import Skirt from '../../../components/woman/Skirt';
import { fetchProducts } from '../../../features/femaleProductsSkirt/actions';
import getStore from '../../../features/redux/selectors';
import { RootAction } from '../../../features/redux/root-actions';
import { RootState } from '../../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const SkirtPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Skirt />
    </div>
  );
};

SkirtPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchProducts())
  return {};
};

export default SkirtPage;
