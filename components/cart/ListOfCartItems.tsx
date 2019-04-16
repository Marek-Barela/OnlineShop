import React from 'react';
import ListOfItemsMobile from './ListOfItemsMobile';
import ListOfItemsDesktop from './ListOfItemsDesktop';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { ProductItem } from '../../features/cart/model';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  textHeader: {
    width: '100%',
    textTransform: 'uppercase',
    fontSize: '0.8em',
    textAlign: 'center',
  },
  productsList: {
    width: '100%',
    margin: 15
  }
});

interface ParentProps {
  products: ProductItem[];
}

type Props = ParentProps & WithStyles<typeof styles>

const ListOfCartItems: NextFunctionComponent<Props> = props => {
  const { classes, products } = props;
  return (
    <>
      <Typography className={classes.textHeader} component="h2" variant="h6">Twój Koszyk</Typography>
      <List className={classes.productsList}>
        <Hidden smUp>
          <ListOfItemsMobile products={products} />
        </Hidden>
        <Hidden xsDown>
          <ListOfItemsDesktop products={products} />
        </Hidden>
      </List>
    </>
  )
}

export default withStyles(styles)(ListOfCartItems);