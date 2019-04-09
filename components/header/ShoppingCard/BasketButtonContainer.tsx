import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  basketButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 50,
    borderTop: '1px solid rgb(0,0,0)',
    padding: '0 20px'
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0 0 0'
  },
  priceLabel: {
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '0.7em'
  },
  price: {
    fontSize: '0.7em'
  },
  basketButton: {
    fontSize: '0.6em',
    textTransform: 'uppercase',
    backgroundColor: '#000000',
    color: '#ffffff',
    border: '1px solid #ffffff',
    margin: '15px 0',
    width: "100%",
    height: 40,
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: "#ffffff",
      color: "#000000",
      border: '1px solid #000000',
    }
  }
});

type Props = WithStyles<typeof styles>;

class ButtonContainer extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.basketButtonContainer}>
        <div className={classes.priceContainer}>
          <Typography component="h6" variant="h6" className={classes.priceLabel}>
            Łączna Wartość:
          </Typography>
          <Typography component="h6" variant="h6" className={classes.price} >
            0 ZŁ
          </Typography>
        </div>
        <Link href="/koszyk">
          <Button className={classes.basketButton}>
            Przejdź do koszyka
        </Button>
        </Link>
      </div>
    )
  }
}

export default withStyles(styles)(ButtonContainer);