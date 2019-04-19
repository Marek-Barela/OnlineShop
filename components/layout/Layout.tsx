import React from 'react';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import Grid from '@material-ui/core/Grid';
import { Gender } from '../../features/utils/gender';
import { NextFunctionComponent } from 'next';

interface Props {
  children: JSX.Element | JSX.Element[];
  URL: Gender;
}

const Layout: NextFunctionComponent<Props> = props => {
  const { children, URL } = props;
  return (
    <Grid>
      <Header URL={URL} />
      <Navigation />
      <main>
        {children}
      </main>
    </Grid>
  )
}

export default Layout;