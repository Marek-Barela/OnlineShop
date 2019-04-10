import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { getCartProducts } from '../../../features/cart/selectors';
import { ProductItem } from '../../../features/cart/model';
import { connect } from 'react-redux';
import { RootState } from '../../../features/redux/root-reducer';

const styles = () => createStyles({
  basketButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 50,
    borderTop: '1px solid rgb(0,0,0)',
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

interface StateProps {
  cartProducts: ProductItem[];
}

type Props = StateProps & WithStyles<typeof styles>;

class ButtonContainer extends Component<Props> {
  calculateProductsPrice() {
    const { cartProducts } = this.props;
    return cartProducts.reduce((acc, product) => {
      const stringToNumber = Number(product.price)
      return product.quantity * stringToNumber + acc
    }, 0)
  }

  render() {
    const { classes } = this.props;
    const fullProductsPrice = this.calculateProductsPrice();
    return (
      <div className={classes.basketButtonContainer}>
        <div className={classes.priceContainer}>
          <Typography component="h6" variant="h6" className={classes.priceLabel}>
            Łączna Wartość:
          </Typography>
          <Typography component="h6" variant="h6" className={classes.price} >
            {fullProductsPrice} ZŁ
          </Typography>
        </div>
        <Link href="/koszyk">
          <Button className={classes.basketButton}>
            Przejdź do koszyka
          </Button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const cartProducts = getCartProducts(state);

  return {
    cartProducts,
  };
};

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withStyles(styles)(ButtonContainer));