import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from 'next/link';
import { Products as ProductItem } from '../../features/maleProducts/model';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

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

class Products extends Component<Props> {
  render() {
    const { productsList, classes } = this.props;
    const products = productsList[0].products;
    const label = productsList[0].label;
    return (
      <>
        <Grid className={classes.root} container>
          <Typography className={classes.label} component="h2">{label}</Typography>
          <Divider />
          <Grid container className={classes.productsContainer}>
            {
              products.map(product => {
                return (
                  <Grid key={product.id} className={classes.product} item xs={3}>
                    <Paper>
                      <Link href="/mezczyzna" >
                        <a className={classes.anchor}>
                          <img className={classes.productImg} src={product.images[0]} />
                          <Typography
                            className={classes.description}
                            component="h5">
                            {product.name}
                          </Typography>
                        </a>
                      </Link>
                      <Typography
                        className={classes.price}
                        component="span"
                        variant="caption">
                        {`${product.price} zł`}
                      </Typography>
                    </Paper>
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
      </>
    )
  }
}

export default withStyles(styles)(Products);