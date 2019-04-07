import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { ProductItem } from '../../features/maleProducts/model';
import { NextFunctionComponent } from 'next';

const styles = () => createStyles({
  image: {
    height: 400,
    maxWidth: '100%'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
});

interface ParentProps {
  product: ProductItem | any;
}

type Props = ParentProps & WithStyles<typeof styles>;

const ProductDetails: NextFunctionComponent<Props> = props => {
  const { product, classes } = props;
  const { name, description, images, } = product;
  return (
    <>
      <Grid container>
        <Grid item xs={5} className={classes.imageContainer}>
          <img className={classes.image} src={images} />
        </Grid>
        <Grid item xs={7}>
          <Typography component="h5" variant="h5">{name}</Typography>
          <Typography component="p" variant="caption">{description}</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default withStyles(styles)(ProductDetails);

