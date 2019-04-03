import React from 'react';
import Man from '../components/man/Man';
import { fetchProducts } from '../features/maleProducts/actions';
import getStore from '../features/redux/selectors';
import { RootAction } from '../features/redux/root-actions';
import { RootState } from '../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const ManPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Man />
    </div>
  );
};

ManPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchProducts())
  return {};
};

export default ManPage;
