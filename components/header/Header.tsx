import React from 'react';
import Gender from './Gender';
import Logo from './Logo';
import ShopCard from './ShopCard';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  root: {
    width: '100%',
    background: '#ffffff',
    borderBottom: "1px solid #e9e9e9",
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

type Props = WithStyles<typeof styles>;

const Header: NextFunctionComponent<Props> = props => {
  const { classes } = props;
  return (
    <header className={classes.root}>
      <Gender />
      <Logo />
      <ShopCard />
    </header>
  )
}

export default withStyles(styles)(Header);
