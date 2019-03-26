import React from 'react';
import { NextFunctionComponent } from 'next';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import PersonOutline from '@material-ui/icons/PersonOutline';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  card__container: {
    display: 'flex'
  }
});

type Props = WithStyles<typeof styles>;

const Gender: NextFunctionComponent<Props> = props => {
  const { classes } = props;
  return (
    <div className={classes.card__container}>
      <FavoriteBorder />
      <PersonOutline />
      <AddShoppingCart />
    </div>
  )
}

export default withStyles(styles)(Gender);