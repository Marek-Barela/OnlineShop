import React from 'react';
import EmptyCart from './EmptyCart';
import ListOfCartItems from './ListOfCartItems';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import { getCartProducts } from '../../features/cart/selectors';
import { ProductItem } from '../../features/cart/model';
import { connect } from 'react-redux';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { RootState } from '../../features/redux/root-reducer';


const styles = () => createStyles({
  line: {
    height: 40,
    backgroundColor: '#333333'
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  logo: {
    textAlign: 'center',
    fontFamily: 'Tangerine, cursive',
    fontWeight: 700,
    padding: '30px 0',
    cursor: 'pointer',
    maxWidth: 290,
    margin: '0 auto',
    userSelect: 'none'
  },
  cartContainer: {
    maxWidth: 1200,
    margin: '0 auto'
  }
});

interface StateProps {
  cartProducts: ProductItem[];
}

type Props = StateProps & WithStyles<typeof styles>

const Cart: NextFunctionComponent<Props> = props => {
  const { classes, cartProducts } = props;
  const emptyCartArray = cartProducts.length === 0;
  return (
    <>
      <header >
        <Grid className={classes.line}></Grid>
        <Grid className={classes.logoWrapper}>
          <Link href="/mezczyzna">
            <img
              className={classes.logo}
              src="https://live.staticflickr.com/65535/33872110278_0437f6c9b5.jpg"
              alt="Vitalina"
            />
          </Link>
        </Grid>
      </header>
      <main>
        <Grid container className={classes.cartContainer}>
          {emptyCartArray ? <EmptyCart /> : <ListOfCartItems products={cartProducts} />}
        </Grid>
      </main>
    </>
  )
}

const mapStateToProps = (state: RootState) => {
  const cartProducts = getCartProducts(state);

  return {
    cartProducts
  };
};

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withStyles(styles)(Cart));