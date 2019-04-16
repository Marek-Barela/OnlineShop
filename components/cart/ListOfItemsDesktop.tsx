import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { ProductItem } from '../../features/cart/model';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  listItem: {
    border: '1px solid rgba(0,0,0,0.17)'
  },
  cartImage: {
    maxWidth: '100%'
  }
});

interface ParentProps {
  products: ProductItem[];
}

type Props = ParentProps & WithStyles<typeof styles>;

const ListOfItemsDesktop: NextFunctionComponent<Props> = props => {
  const { classes, products } = props;
  return (
    <>
      {products.map((product, index) => {
        const { images, name, color, quantity, price } = product;
        return (
          <ListItem key={index} className={classes.listItem}>
            <Grid container alignItems="center">
              <Grid xs={3}>
                <img className={classes.cartImage} src={images[0]} />
              </Grid>
            </Grid>
          </ListItem>
        )
      })}
    </>
  )
}

export default withStyles(styles)(ListOfItemsDesktop);