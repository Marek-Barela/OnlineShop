import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import { ProductItem } from '../../features/cart/model';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = () => createStyles({
  tableWrapper: {
    overflowX: 'auto',
    minWidth: '100%'
  },
  table: {
    marginTop: 30
  },
  tableHeade: {
    backgroundColor: '#f0f0f0'
  },
  productRow: {
    border: '1px solid rgba(0,0,0,0.16)',
    width: '100%'
  },
  tableHeadCell: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '2px',
    fontSize: '0.6em',
    color: "#000000"
  },
  productImageCell: {
    maxWidth: 100,
    padding: '14px 10px',
  },
  productImage: {
    maxWidth: '100%'
  },
  textDescription: {
    fontSize: '0.9em',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  deleteButton: {
    textAlign: 'center',
  },
  tableFooter: {
    backgroundColor: '#f0f0f0'
  },
  tableFooterCell: {
    minWidth: 200,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '2px',
    fontSize: '0.55em',
    color: "#000000",
    padding: '6px 0'
  }
});

interface ParentProps {
  products: ProductItem[];
}

type Props = ParentProps & WithStyles<typeof styles>;

const ListOfItemsDesktop: NextFunctionComponent<Props> = props => {
  const { classes, products } = props;

  const totalPriceOfItems = products.reduce((acc, product) => {
    const { price, quantity } = product;
    const priceStringToNumber = Number(price);
    const totalPriceOfSameItems = priceStringToNumber * quantity;
    return totalPriceOfSameItems + acc;
  }, 0).toFixed(2);

  return (
    <div className={classes.tableWrapper}>
      <Table className={classes.table}>
        <TableHead className={classes.tableHeade}>
          <TableRow className={classes.productRow}>
            <TableCell></TableCell>
            <TableCell className={classes.tableHeadCell}>Produkt</TableCell>
            <TableCell className={classes.tableHeadCell}>Cena</TableCell>
            <TableCell className={classes.tableHeadCell}>Ilość</TableCell>
            <TableCell className={classes.tableHeadCell}>Cena razem</TableCell>
            <TableCell className={classes.tableHeadCell}>Usuń</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => {
            const { images, name, color, price, quantity } = product;
            const priceStringToNumber = Number(price) as any;
            const fullSingleItemPrice = (priceStringToNumber * quantity).toFixed(2);
            return (
              <TableRow key={index} className={classes.productRow}>
                <TableCell className={classes.productImageCell}>
                  <img src={images[0]} alt="produkt" className={classes.productImage} />
                </TableCell>
                <TableCell>
                  <Typography className={classes.textDescription}>{name}</Typography>
                  <Typography className={classes.textDescription}>{color}</Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.textDescription}>{price} ZŁ</Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.textDescription}>{quantity}</Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.textDescription}>{fullSingleItemPrice} ZŁ</Typography>
                </TableCell>
                <TableCell className={classes.deleteButton}>
                  <DeleteSharpIcon />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
        <TableFooter className={classes.tableFooter}>
          <TableRow className={classes.productRow}>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className={classes.tableFooterCell}>Suma koszyka: {totalPriceOfItems} ZŁ</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export default withStyles(styles)(ListOfItemsDesktop);