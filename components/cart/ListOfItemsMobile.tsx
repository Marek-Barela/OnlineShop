import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DeleteListElement from './DeleteListElement';
import { ProductItem } from '../../features/cart/model';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  listItem: {
    border: '1px solid rgba(0,0,0,0.17)'
  },
  cartImage: {
    maxWidth: '100%'
  },
  textContainer: {
    paddingLeft: '10px'
  },
  textDescription: {
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }
});

interface ParentProps {
  products: ProductItem[];
}

type Props = ParentProps & WithStyles<typeof styles>;

const ListOfItemsMobile: NextFunctionComponent<Props> = props => {

  const fullPriceOfSingleItem = (price: string, quantity: number) => {
    const priceStringToNumber = Number(price);
    return (priceStringToNumber * quantity).toFixed(2);
  }

  const { classes, products } = props;
  return (
    <>
      {products.map((product, index) => {
        const { _id, images, name, color, quantity, price } = product;
        const fullSingleItemPrice = fullPriceOfSingleItem(price, quantity)
        return (
          <ListItem key={index} className={classes.listItem}>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <img className={classes.cartImage} src={images[0]} alt="produkt" />
              </Grid>
              <Grid item xs={8} className={classes.textContainer}>
                <Typography className={classes.textDescription}>{name}</Typography>
                <Typography className={classes.textDescription}>{price} ZŁ</Typography>
                <Typography className={classes.textDescription}>{color}</Typography>
                <Typography className={classes.textDescription}>Ilość {quantity}</Typography>
                <Typography className={classes.textDescription}>Łącznie {fullSingleItemPrice} ZŁ</Typography>
              </Grid>
              <Grid item xs={1} >
                <DeleteListElement id={_id} />
              </Grid>
            </Grid>
          </ListItem>
        )
      })}
    </>
  )
}

export default withStyles(styles)(ListOfItemsMobile);