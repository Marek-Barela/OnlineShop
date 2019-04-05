import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
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
    border: '1px solid #dedede',
    padding: '40px 40px 10px',
    cursor: 'pointer',
    transition: '0.3s all',
    "&:hover": {
      boxShadow: '0 5px 15px 0 rgba(17,22,32,.1)'
    }
  },
  productImg: {
    width: '100%',
    border: '1px solid #dedede',
  },
  description: {
    textAlign: 'center',
    textTransform: 'uppercase',
    margin: 10
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
        <Grid spacing={16} className={classes.root} container>
          <Typography className={classes.label} component="h2">{label}</Typography>
          <Divider light={false} />
          <Grid container className={classes.productsContainer}>
            {
              products.map(product => {
                return (
                  <Grid  className={classes.product} item xs={4} key={product.id}>
                    <img className={classes.productImg} src={product.images[0]} />
                    <Typography
                      className={classes.description}
                      component="h5">
                      {product.name}
                    </Typography>
                    <Typography
                      className={classes.description}
                      component="h5" variant="caption">
                      {`${product.price}zł`}
                    </Typography>
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