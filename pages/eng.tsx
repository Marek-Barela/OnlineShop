import React from 'react';
import AppContentEng from '../components/AppContentEng/AppContentEng';
import * as Language from '../features/lang/pl';
import getStore from '../features/redux/selectors';
import { RootAction } from '../features/redux/root-actions';
import { RootState } from '../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const App: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <AppContentEng {...Language} />
    </div>
  );
};

App.getInitialProps = async (store) => {
  const action = getStore(store)
  //action.dispatch(fetchCounter());
  return {};
};

export default App;
