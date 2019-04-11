import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  emptyCard: {
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
  emptyCardText: {
    fontSize: '0.7em'
  },
  emptyCardButton: {
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

const EmptyCard: NextFunctionComponent<Props> = props => {
  const { classes } = props;
  return (
    <div className={classes.emptyCard}>
      <ShoppingBasketOutlined className={classes.icon} />
      <Typography className={classes.emptyCardText}>Twój koszyk jest pusty</Typography>
      <Link href="/mezczyzna">
        <Button className={classes.emptyCardButton}>Rozpocznij zakupy</Button>
      </Link>
    </div>
  )
}

export default withStyles(styles)(EmptyCard);