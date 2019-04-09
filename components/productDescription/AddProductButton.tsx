import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  button: {
    fontSize: '0.6em',
    textTransform: 'uppercase',
    backgroundColor: '#000000',
    color: '#ffffff',
    border: '1px solid #ffffff',
    margin: '25px 0',
    width: 300,
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

class AddProductButton extends Component<Props> {

  addProductToBasket() {

  }

  render() {
    const { classes } = this.props;
    return (
      <Button
        className={classes.button}
        onClick={() => this.addProductToBasket()}
      >
        Dodaj Do Koszyka
      </Button>
    )
  }
}

export default withStyles(styles)(AddProductButton);