import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import { deleteProductFromCart } from '../../features/cart/actions';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { RootState } from '../../features/redux/root-reducer';
import { connect } from 'react-redux';

const styles = () => createStyles({
  BtnColor: {
    color: '#000000'
  }
});

interface ParentProps {
  id: string;
}

interface DispatchProps {
  onDeleteProduct: (payload: string) => void;
}

type Props = ParentProps & DispatchProps & WithStyles<typeof styles>

class DeleteListElement extends Component<Props> {

  deleteProductFromList(id: string) {
    const { onDeleteProduct } = this.props;
    onDeleteProduct(id)
  }

  render() {
    const { classes, id } = this.props;
    return (
      <IconButton
        aria-label="Delete"
        className={classes.BtnColor}
        onClick={() => this.deleteProductFromList(id)}
      >
        <DeleteSharpIcon />
      </IconButton>
    )
  }
}

const mapDispatchToProps = {
  onDeleteProduct: deleteProductFromCart
};

export default connect<{}, DispatchProps, {}, RootState>(null, mapDispatchToProps)(withStyles(styles)(DeleteListElement));