import React from 'react';
import Gender from './Gender';
import Logo from './Logo';
import ShopCard from './ShopCard';
import '../header/header.css';
import { Gender as GenderType } from '../man/Man';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  root: {
    position: 'relative',
    width: '100%',
    background: '#ffffff',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 100
  }
});

interface StateProps {
  URL: GenderType;
}

type Props = StateProps & WithStyles<typeof styles>;

const Header: NextFunctionComponent<Props> = props => {
  const { classes, URL } = props;
  return (
    <header className={classes.root}>
      <Gender URL={URL} />
      <Logo />
      <ShopCard />
    </header>
  )
}

export default withStyles(styles)(Header);
