import React from 'react';
import Tracksuit from '../../../components/man/Tracksuit';
import { fetchProducts } from '../../../features/maleProductsTracksuit/actions';
import getStore from '../../../features/redux/selectors';
import { RootAction } from '../../../features/redux/root-actions';
import { RootState } from '../../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const TracksuitPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Tracksuit />
    </div>
  );
};

TracksuitPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchProducts())
  return {};
};

export default TracksuitPage;
