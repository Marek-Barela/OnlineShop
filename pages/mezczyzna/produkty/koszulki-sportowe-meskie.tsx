import React from 'react';
import Tshirt from '../../../components/man/Tshirt';
import { fetchProducts } from '../../../features/maleProductsTshirt/actions';
import getStore from '../../../features/redux/selectors';
import { RootAction } from '../../../features/redux/root-actions';
import { RootState } from '../../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const TracksuitPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Tshirt />
    </div>
  );
};

TracksuitPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchProducts())
  return {};
};

export default TracksuitPage;
