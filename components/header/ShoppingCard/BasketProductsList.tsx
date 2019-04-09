import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  emptyBasket: {
    textTransform: 'uppercase',
    fontSize: '0.6em',
    textAlign: 'center',
    margin: '25px 0'
  }
});

type Props = WithStyles<typeof styles>;

class BasketProductsList extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography
          component="h6" variant="h6"
          className={classes.emptyBasket}
        >
          Twój koszyk jest pusty.
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(BasketProductsList);