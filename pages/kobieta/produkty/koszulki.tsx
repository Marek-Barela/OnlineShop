import React from 'react';
import Tshirt from '../../../components/woman/Tshirt';
import { fetchProducts } from '../../../features/femaleProductsTshirt/actions';
import getStore from '../../../features/redux/selectors';
import { RootAction } from '../../../features/redux/root-actions';
import { RootState } from '../../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const TshirtPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Tshirt />
    </div>
  );
};

TshirtPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchProducts())
  return {};
};

export default TshirtPage;
