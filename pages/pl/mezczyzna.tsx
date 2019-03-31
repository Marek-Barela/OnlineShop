import React from 'react';
import Man from '../../components/manPolish/Man';
import * as Language from '../../features/lang/pl';
import getStore from '../../features/redux/selectors';
import { RootAction } from '../../features/redux/root-actions';
import { RootState } from '../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const ManPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Man {...Language} />
    </div>
  );
};

ManPage.getInitialProps = async (store) => {
  const action = getStore(store)
  return {};
};

export default ManPage;
