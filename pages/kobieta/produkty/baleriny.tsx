import React from 'react';
import Ballerina from '../../../components/woman/Ballerina';
import { fetchProducts } from '../../../features/femaleProductsBallerina/actions';
import getStore from '../../../features/redux/selectors';
import { RootAction } from '../../../features/redux/root-actions';
import { RootState } from '../../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const BallerinaPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Ballerina />
    </div>
  );
};

BallerinaPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchProducts())
  return {};
};

export default BallerinaPage;
