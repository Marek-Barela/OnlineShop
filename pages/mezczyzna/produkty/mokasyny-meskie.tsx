import React from 'react';
import Moccasins from '../../../components/man/Moccasins';
import { fetchProducts } from '../../../features/maleProductsMoccasins/actions';
import getStore from '../../../features/redux/selectors';
import { RootAction } from '../../../features/redux/root-actions';
import { RootState } from '../../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const MoccasinsPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Moccasins />
    </div>
  );
};

MoccasinsPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchProducts())
  return {};
};

export default MoccasinsPage;
