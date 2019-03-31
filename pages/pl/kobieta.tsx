import React from 'react';
import Woman from '../../components/womanPolish/Woman';
import * as Language from '../../features/lang/pl';
import getStore from '../../features/redux/selectors';
import { RootAction } from '../../features/redux/root-actions';
import { RootState } from '../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const WomanPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Woman {...Language} />
    </div>
  );
};

WomanPage.getInitialProps = async (store) => {
  const action = getStore(store)
  return {};
};

export default WomanPage;
