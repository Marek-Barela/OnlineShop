import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ProductItem } from '../../features/cart/model'
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  product: {
    borderTop: '1px solid rgb(0,0,0)',
    padding: 10,
    '&:first-child': {
      border: 'none'
    }
  },
  productImg: {
    maxWidth: '100%',
  },
  textContainer: {
    margin: '0 10px'
  },
  description: {
    textTransform: 'uppercase',
    fontSize: '0.50em',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  price: {
    fontSize: '0.7em',
  }
});

const convertStringToArray = (images: [] | string) => {
  if (Array.isArray(images)) {
    return images
  }
  else {
    return [images]
  }
}

interface ParentProps {
  product: ProductItem;
}

type Props = ParentProps & WithStyles<typeof styles>;

const BasketListItem: NextFunctionComponent<Props> = props => {
  const { classes, product } = props;
  const { images, name, quantity, price, color } = product;
  const imagesToArray = convertStringToArray(images)
  return (
    <ListItem className={classes.product}>
      <Grid item xs={3}>
        <img className={classes.productImg} src={imagesToArray[0]} />
      </Grid>
      <Grid item xs={6} className={classes.textContainer}>
        <Typography className={classes.description}>{name}</Typography>
        <Typography className={classes.description}>Ilość {quantity}</Typography>
        <Typography className={classes.description}>{color}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.price}>{price}ZŁ</Typography>
      </Grid>
    </ListItem>
  )
}

export default withStyles(styles)(BasketListItem);