import React from 'react';
import ElasticSides from '../../../components/man/ElasticSides';
import { fetchProducts } from '../../../features/maleProductsElasticSides/actions';
import getStore from '../../../features/redux/selectors';
import { RootAction } from '../../../features/redux/root-actions';
import { RootState } from '../../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const ElasticSidesPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <ElasticSides />
    </div>
  );
};

ElasticSidesPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchProducts())
  return {};
};

export default ElasticSidesPage;
