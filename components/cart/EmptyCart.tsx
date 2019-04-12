import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  emptyCart: {
    border: '1px solid rgba(0,0,0,0.17)',
    minHeight: 250,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  icon: {
    fontSize: '5em'
  },
  emptyCartText: {
    fontSize: '0.7em'
  },
  emptyCartButton: {
    fontSize: '0.6em',
    textTransform: 'uppercase',
    backgroundColor: '#000000',
    color: '#ffffff',
    border: '1px solid #ffffff',
    margin: '15px 0',
    width: 250,
    height: 40,
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: "#ffffff",
      color: "#000000",
      border: '1px solid #000000',
    }
  }
});

type Props = WithStyles<typeof styles>

const EmptyCart: NextFunctionComponent<Props> = props => {
  const { classes } = props;
  return (
    <Grid className={classes.emptyCart}>
      <ShoppingBasketOutlined className={classes.icon} />
      <Typography className={classes.emptyCartText}>Twój koszyk jest pusty</Typography>
      <Link href="/mezczyzna">
        <Button className={classes.emptyCartButton}>Rozpocznij zakupy</Button>
      </Link>
    </Grid>
  )
}

export default withStyles(styles)(EmptyCart);