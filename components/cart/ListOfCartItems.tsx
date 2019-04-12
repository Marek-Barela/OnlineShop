import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ProductItem } from '../../features/cart/model';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  productsList: {
    width: '100%'
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
      <List className={classes.productsList}>
        {products.map((product, index) => {
          return (
            <ListItem>

            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default withStyles(styles)(ListOfCartItems);