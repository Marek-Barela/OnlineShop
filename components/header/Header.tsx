import React from 'react';
import Gender from './Gender';
import Logo from './Logo';
import ShopCard from './ShopCard';
import Grid from '@material-ui/core/Grid';
import '../header/header.css';
import { Gender as GenderType } from '../../features/utils/gender';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  root: {
    position: 'relative',
    width: '100%',
    background: '#ffffff',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    padding: '10px 20px',
    zIndex: 2
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
  }
});

interface ParentProps {
  URL: GenderType;
}

type Props = ParentProps & WithStyles<typeof styles>;

const Header: NextFunctionComponent<Props> = props => {
  const { classes, URL } = props;
  return (
    <header className={classes.root}>
      <Grid container className={classes.grid}>
        <Gender URL={URL} />
        <Logo />
        <ShopCard />
      </Grid>
    </header>
  )
}

export default withStyles(styles)(Header);
