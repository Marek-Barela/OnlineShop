import React from 'react';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import { NavigationTypes, NavigationClothes, HeaderTypes } from '../../features/lang/pl';
import { NextFunctionComponent } from 'next';

interface Props {
  navigation: NavigationTypes;
  navigationList: NavigationClothes;
  header: HeaderTypes;
  children: JSX.Element;
}

const Layout: NextFunctionComponent<Props> = props => {
  const { navigation, navigationList, header, children } = props;
  return (
    <div>
      <Header gender={header} />
      <Navigation menu={navigation} dropdownList={navigationList} />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;