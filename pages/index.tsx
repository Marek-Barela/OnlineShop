import React from 'react';
import Home from '../components/home/Home';
import getStore from '../features/redux/selectors';
import { RootAction } from '../features/redux/root-actions';
import { RootState } from '../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const HomePagePl: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Home />
    </div>);
};

HomePagePl.getInitialProps = async (store) => {
  const action = getStore(store)
  //action.dispatch(fetchCounter());
  return {};
};

export default HomePagePl;
