import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { addProductToCard } from '../../features/card/actions';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';
import { ProductItem } from '../../features/card/model';

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

interface ParentProps {
  product: ProductItem
}

interface DispatchProps {
  addProductToCard: (payload: ProductItem) => void;
}

type Props = ParentProps & DispatchProps & WithStyles<typeof styles>;

class AddProductButton extends Component<Props> {

  addProductToBasket(product: ProductItem) {
    const { addProductToCard } = this.props;
    addProductToCard(product)
  }

  render() {
    const { classes, product } = this.props;
    return (
      <Button
        className={classes.button}
        onClick={() => this.addProductToBasket(product)}
      >
        Dodaj Do Koszyka
      </Button>
    )
  }
}

const mapDispatchToProps = {
  addProductToCard
};

export default connect<{}, DispatchProps, {}, RootState>(null, mapDispatchToProps)(withStyles(styles)(AddProductButton));