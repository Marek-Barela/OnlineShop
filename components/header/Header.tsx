import React from 'react';
import Gender from './Gender';
import Logo from './Logo';
import ShopCard from './ShopCard';
import { HeaderTypes } from '../../features/lang/pl';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  root: {
    position: 'relative',
    width: '100%',
    background: '#ffffff',
    borderBottom: "1px solid #e9e9e9",
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 100
  }
});

interface StateProps {
  gender: HeaderTypes;
}

type Props = StateProps & WithStyles<typeof styles>;

const Header: NextFunctionComponent<Props> = props => {
  const { classes, gender } = props;
  return (
    <header className={classes.root}>
      <Gender gender={gender} />
      <Logo />
      <ShopCard />
    </header>
  )
}

export default withStyles(styles)(Header);
