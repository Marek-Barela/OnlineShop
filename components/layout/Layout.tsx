import React from 'react';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import { Gender } from '../manPolish/Man';
import { NavigationTypes, NavigationClothes, HeaderTypes } from '../../features/lang/pl';
import { NextFunctionComponent } from 'next';

interface Props {
  navigation: NavigationTypes;
  navigationList: NavigationClothes;
  header: HeaderTypes;
  children: JSX.Element | JSX.Element[];
  URL: Gender;
}

const Layout: NextFunctionComponent<Props> = props => {
  const { navigation, navigationList, header, children, URL } = props;
  return (
    <div>
      <Header gender={header} URL={URL} />
      <Navigation menu={navigation} dropdownList={navigationList} />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;