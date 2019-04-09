import React from 'react';
import { NextFunctionComponent } from 'next';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import PersonOutline from '@material-ui/icons/PersonOutline';
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  card__container: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  icon: {
    margin: '0 8px',
    color: "grey",
    fontSize: '1.1em',
  }
});

type Props = WithStyles<typeof styles>;

const Gender: NextFunctionComponent<Props> = props => {
  const { classes } = props;
  return (
    <Hidden smDown>
      <Grid item xs={4} className={classes.card__container}>
        <FavoriteBorder className={classes.icon} />
        <PersonOutline className={classes.icon} />
        <ShoppingBasketOutlined className={classes.icon} />
      </Grid>
    </Hidden>
  )
}

export default withStyles(styles)(Gender);