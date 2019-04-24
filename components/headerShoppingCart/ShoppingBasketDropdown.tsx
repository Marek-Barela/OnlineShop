import React, { Component, MouseEventHandler } from 'react';
import BasketProductsList from './BasketProductsList';
import BasketCountContainer from './BasketCountContainer';
import Grid from '@material-ui/core/Grid';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  basket: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#ffffff',
    border: '2px solid rgb(0,0,0)',
    bottom: 0,
    right: 0,
    transform: 'translateY(100%)',
    zIndex: 1000
  }
});

interface ParentProps {
  mouseIn: MouseEventHandler;
  mouseOut: MouseEventHandler;
}

type Props = ParentProps & WithStyles<typeof styles>;

class ShoppingBasketDropdown extends Component<Props> {
  render() {
    const { classes, mouseIn, mouseOut } = this.props;
    return (
      <Grid className={classes.basket}
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
      >
        <BasketProductsList />
        <BasketCountContainer />
      </Grid>
    )
  }
}

export default withStyles(styles)(ShoppingBasketDropdown);