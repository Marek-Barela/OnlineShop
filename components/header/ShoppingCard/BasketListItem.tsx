import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ProductItem } from '../../../features/cart/model'
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  productItem: {

  },
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
  return (
    <ListItem className={classes.productItem}>
      <Grid xs={3}>
        <img className={classes.productImg} src={product.images} />
      </Grid>
      <Grid xs={6}>
        <Typography>{product.name}</Typography>
      </Grid>
      <Grid xs={3}>
        <Typography>{product.price}ZŁ</Typography>
      </Grid>
    </ListItem>
  )
}

export default withStyles(styles)(BasketListItem);