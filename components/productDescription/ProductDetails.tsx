import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
  button: {
    fontSize: '0.6em',
    textTransform: 'uppercase',
    backgroundColor: '#000000',
    color: '#ffffff',
    border: '1px solid #ffffff',
    margin: '25px 0',
    width: 300,
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
  product: ProductItem | any;
}

type Props = ParentProps & WithStyles<typeof styles>;

const ProductDetails: NextFunctionComponent<Props> = props => {
  const { product, classes } = props;
  const { name, description, fabric, price, images, } = product;
  return (
    <>
      <Grid container>
        <Grid item xs={5} className={classes.imageContainer}>
          <img className={classes.image} src={images} />
        </Grid>
        <Grid item xs={7} className={classes.descriptionContainer}>
          <Typography className={classes.productName} component="h4" variant="h6">{name}</Typography>
          <Typography className={classes.fabric} component="span" variant="caption">{fabric}</Typography>
          <Typography className={classes.price} component="span" variant="subtitle1">{price} ZŁ</Typography>
          <Typography className={classes.productDescription} component="h6" variant="h6">Opis Produktu:</Typography>
          <Typography className={classes.description} component="p" variant="subtitle1">{description}</Typography>
          <Button className={classes.button}>Dodaj Do Koszyka</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default withStyles(styles)(ProductDetails);

