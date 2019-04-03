import React from 'react';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import { Gender } from '../man/Man';
import { JSONCategoriesResponse } from '../../features/maleProducts/model';
import { NextFunctionComponent } from 'next';

interface Props {
  navigationList: JSONCategoriesResponse;
  children: JSX.Element | JSX.Element[];
  URL: Gender;
}

const Layout: NextFunctionComponent<Props> = props => {
  const { navigationList, children, URL } = props;
  return (
    <div>
      <Header URL={URL} />
      <Navigation dropdownList={navigationList} />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;