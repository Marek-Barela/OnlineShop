import React from 'react';
import ListOfItemsMobile from './ListOfItemsMobile';
import TableOfItemsDesktop from './TableOfItemsDesktop';
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
    fontSize: '1.1em',
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
      <Hidden smUp>
        <List className={classes.productsList}>
          <ListOfItemsMobile products={products} />
        </List>
      </Hidden>
      <Hidden xsDown>
        <TableOfItemsDesktop products={products} />
      </Hidden>
    </>
  )
}

export default withStyles(styles)(ListOfCartItems);