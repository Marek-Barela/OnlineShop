import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ProductItem } from '../../../features/cart/model'
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  productImg: {
    maxWidth: '100%',
  }
});

interface ParentProps {
  product: ProductItem;
}

type Props = ParentProps & WithStyles<typeof styles>;

const BasketListItem: NextFunctionComponent<Props> = props => {
  const { classes, product } = props;
  const { images, name, quantity, price } = product;
  return (
    <ListItem>
      <Grid item xs={3}>
        <img className={classes.productImg} src={images[0]} />
      </Grid>
      <Grid item xs={6}>
        <Typography>{name}</Typography>
        <Typography>{quantity}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>{price}ZŁ</Typography>
      </Grid>
    </ListItem>
  )
}

export default withStyles(styles)(BasketListItem);