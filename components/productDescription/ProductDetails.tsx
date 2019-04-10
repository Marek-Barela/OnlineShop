import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddProductButton from './AddProductButton';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { ProductItem } from '../../features/maleProducts/model';
import { NextFunctionComponent } from 'next';

const styles = () => createStyles({
  image: {
    height: 400,
    maxWidth: '100%'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  descriptionContainer: {
    padding: '0 30px'
  },
  productName: {
    marginTop: 20,
    textTransform: 'uppercase',
    fontSize: '1em',
    letterSpacing: '2px'
  },
  fabric: {
    color: "#aaaaaa"
  },
  price: {
    fontSize: '1.7em',
    margin: '20px 0'
  },
  productDescription: {
    textTransform: 'uppercase',
    fontSize: '0.85em',
    letterSpacing: '2px'
  },
  description: {
    fontSize: '0.75em',
    letterSpacing: '2px'
  },

});

interface ParentProps {
  product: ProductItem | any;
}

type Props = ParentProps & WithStyles<typeof styles>;

const ProductDetails: NextFunctionComponent<Props> = props => {
  const { product, classes } = props;
  const { name, description, fabric, price, images, } = product;
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={5} className={classes.imageContainer}>
          <img className={classes.image} src={images} />
        </Grid>
        <Grid item xs={12} md={7} className={classes.descriptionContainer}>
          <Typography
            className={classes.productName}
            component="h4"
            variant="h6"
          >{name}
          </Typography>
          <Typography
            className={classes.fabric}
            component="span"
            variant="caption"
          >{fabric}
          </Typography>
          <Typography
            className={classes.price}
            component="span"
            variant="subtitle1"
          >{price} ZŁ
          </Typography>
          <Typography
            className={classes.productDescription}
            component="h6"
            variant="h6"
          >Opis Produktu:
          </Typography>
          <Typography
            className={classes.description}
            component="p"
            variant="subtitle1"
          >{description}
          </Typography>
          <AddProductButton product={product} />
        </Grid>
      </Grid>
    </>
  )
}

export default withStyles(styles)(ProductDetails);

