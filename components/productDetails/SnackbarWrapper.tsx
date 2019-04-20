import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import green from '@material-ui/core/colors/green';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { NextFunctionComponent } from 'next';


const styles = () => createStyles({
  snackbarMessage: {
    textTransform: 'uppercase',
    fontSize: '0.75em',
    letterSpacing: '2px',
    userSelect: 'none'
  },
  snackbar: {
    backgroundColor: green[600],
    display: 'flex',
    justifyContent: 'center'
  }
});

interface ParentProps {
  productInCartSuccess: boolean;
  handleClose: () => void;
}

type Props = ParentProps & WithStyles<typeof styles>;

const SnackbarWrapper: NextFunctionComponent<Props> = (props) => {
  const { classes, productInCartSuccess, handleClose } = props;
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={productInCartSuccess}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <SnackbarContent
        className={classes.snackbar}
        message={<span className={classes.snackbarMessage}>Produkt został dodany do koszyka</span>}
      />
    </Snackbar>
  )
}

export default withStyles(styles)(SnackbarWrapper);;