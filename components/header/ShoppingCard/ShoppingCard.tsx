import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined';
import ShoppingBasketDropdown from './ShoppingBasketDropdown';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Link from 'next/link';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  card__container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: 100
  },
  icon: {
    color: '#9e9e9e',
    fontSize: '1.1em',
  },
  basketContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '10px 15px 10px 15px'
  },
  basketText: {
    fontSize: '0.55em',
    textTransform: 'uppercase',
    margin: '0 10px',
    letterSpacing: '2px',
    color: '#9e9e9e'
  }
});

type Props = WithStyles<typeof styles>;

class ShoppingCard extends Component<Props> {
  state = {
    basketDisplayed: false,
  }

  displayBasket = () => {
    this.setState({
      basketDisplayed: true
    })
  }

  hideBasket = () => {
    this.setState({
      basketDisplayed: false
    })
  }

  render() {
    const { classes } = this.props;
    const { basketDisplayed } = this.state;
    return (
      <Hidden smDown>
        <Grid item xs={4} className={classes.card__container}>
          <Link href="/koszyk">
            <div
              className={classes.basketContainer}
              onMouseEnter={() => this.displayBasket()}
              onMouseLeave={() => this.hideBasket()}
            >
              <ShoppingBasketOutlined className={classes.icon} />
              <Typography component="h6" variant="h6" className={classes.basketText}>
                Koszyk [0]
            </Typography>
            </div>
          </Link>
          {
            basketDisplayed && <ShoppingBasketDropdown
              mouseIn={() => this.displayBasket()}
              mouseOut={() => this.hideBasket()}
            />
          }
        </Grid>
      </Hidden>
    )
  }
}



export default withStyles(styles)(ShoppingCard);