import React from 'react';
import Products from '../../components/products/Products';
import { fetchProducts } from '../../features/maleProducts/actions';
import getStore from '../../features/redux/selectors';
import { RootAction } from '../../features/redux/root-actions';
import { RootState } from '../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const ProductsPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

ProductsPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchProducts())
  return {};
};

export default ProductsPage;
