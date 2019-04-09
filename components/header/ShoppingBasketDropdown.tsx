import React, { Component, MouseEventHandler } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  basket: {
    position: 'absolute',
    width: 350,
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0,0,0,0.16)',
    top: 40,
    right: 0,
    zIndex: 1000
  },
  emptyBasket: {
    textTransform: 'uppercase',
    fontSize: '0.6em',
    textAlign: 'center',
    margin: '25px 0'
  },
  basketButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 50,
    borderTop: '1px solid rgba(0,0,0,0.16)',
    padding: '0 20px'
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0 0 0'
  },
  priceLabel: {
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '0.7em'
  },
  price: {
    fontSize: '0.7em'
  },
  basketButton: {
    fontSize: '0.6em',
    textTransform: 'uppercase',
    backgroundColor: '#000000',
    color: '#ffffff',
    border: '1px solid #ffffff',
    margin: '15px 0',
    width: "100%",
    height: 40,
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: "#ffffff",
      color: "#000000",
      border: '1px solid #000000',
    }
  }
});

interface ParentProps {
  mouseIn: MouseEventHandler;
  mouseOut: MouseEventHandler;
}

type Props = ParentProps & WithStyles<typeof styles>;

class ShoppingBasketDropdown extends Component<Props> {
  state = {

  }

  render() {
    const { classes, mouseIn, mouseOut } = this.props;
    return (
      <div className={classes.basket}
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
      >
        <div>
          <Typography
            component="h6" variant="h6"
            className={classes.emptyBasket}
          >
            Twój koszyk jest pusty.
          </Typography>
        </div>

        <div className={classes.basketButtonContainer}>
          <div className={classes.priceContainer}>
            <Typography
              component="h6" variant="h6"
              className={classes.priceLabel}
            >
              Łączna Wartość:
            </Typography>
            <Typography
              component="h6" variant="h6"
              className={classes.price}
            >
              0 ZŁ
            </Typography>
          </div>
          <Button
            className={classes.basketButton}
          >
            Przejdź do koszyka
          </Button>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ShoppingBasketDropdown);