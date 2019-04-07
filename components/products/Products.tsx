import React from 'react';
import Product from './Product';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Products as ProductItem } from '../../features/maleProducts/model';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { NextFunctionComponent } from 'next';

const styles = () => createStyles({
  root: {
    maxWidth: 1200,
    margin: '0 auto',
    flexDirection: 'column'
  },
  label: {
    width: '100%',
    fontSize: '1.6em',
    textAlign: 'center',
    margin: '40px 0',
    textTransform: 'uppercase'
  },
  productsContainer: {
    margin: '40px 0',
  },
  product: {
    padding: '20px 10px 10px 10px',
  },
  anchor: {
    color: 'inherit',
    textDecoration: 'none'
  },
  productImg: {
    width: '100%',
    padding: '30px 10px',
    cursor: 'pointer'
  },
  description: {
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  price: {
    textAlign: 'center',
    padding: '0 0 20px 0'
  }
});

interface ParentProps {
  productsList: ProductItem[];
}

type Props = ParentProps & WithStyles<typeof styles>;

const Products: NextFunctionComponent<Props> = (props) => {
  const { productsList, classes } = props;
  const products = productsList[0].products;
  const label = productsList[0].label;
  return (
    <>
      <Grid className={classes.root} container>
        <Typography className={classes.label} component="h2">{label}</Typography>
        <Divider />
        <Grid container className={classes.productsContainer}>
          {products.map(product => <Product key={product.id} product={product} />)}
        </Grid>
      </Grid>
    </>
  )
}

export default withStyles(styles)(Products);