import React from 'react';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import { Gender } from '../../features/utils/gender';
import { NextFunctionComponent } from 'next';

interface Props {
  children: JSX.Element | JSX.Element[];
  URL: Gender;
  nav: any;
}

const Layout: NextFunctionComponent<Props> = props => {
  const { children, URL, nav } = props;
  return (
    <>
      <Header URL={URL} />
      <Navigation nav={nav} />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout;