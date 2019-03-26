import React from 'react';
import Counter from '../components/counter/counter';
import getStore from '../features/redux/selectors';
import { fetchCounter } from '../features/counter/actions';
import { RootAction } from '../features/redux/root-actions';
import { RootState } from '../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const CounterPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Counter />
    </div>
  )
}

CounterPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchCounter());
  return {};
};

export default CounterPage;