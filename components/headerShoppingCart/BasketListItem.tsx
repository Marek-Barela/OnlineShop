import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ProductItem } from '../../features/cart/model'
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  product: {
    borderTop: '2px solid rgb(0,0,0)',
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
    fontSize: '0.65em',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  price: {
    fontSize: '0.65em',
    fontWeight: 'bold',
  }
});

interface ParentProps {
  product: ProductItem;
}

type Props = ParentProps & WithStyles<typeof styles>;

const BasketListItem: NextFunctionComponent<Props> = props => {
  const { classes, product } = props;
  const { images, name, quantity, price, color } = product;
  return (
    <ListItem className={classes.product}>
      <Grid item xs={3}>
        <img className={classes.productImg} src={images[0]} />
      </Grid>
      <Grid item xs={7} className={classes.textContainer}>
        <Typography className={classes.description}>{name}</Typography>
        <Typography className={classes.description}>Ilość {quantity}</Typography>
        <Typography className={classes.description}>{color}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.price}>{price}ZŁ</Typography>
      </Grid>
    </ListItem>
  )
}

export default withStyles(styles)(BasketListItem);