import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductTextDescription from './ProductTextDescription';
import AddProductButton from './AddProductButton';
import ImageMiniature from './ImageMiniature';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { ProductItem } from '../../features/maleProducts/model';
import { NextFunctionComponent } from 'next';

const styles = (theme: Theme) => createStyles({
  imageMiniatureContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.up('xs')]: {
      order: 2,
      justifyContent: 'center'
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
      flexWrap: 'initial',
      order: 1
    }
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('xs')]: {
      order: 1
    },
    [theme.breakpoints.up('md')]: {
      order: 2
    },
  },
  mainImage: {
    maxWidth: '100%',
    margin: '0 auto',
    height: 'auto'
  },
  descriptionContainer: {
    padding: '0 30px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px',
      textAlign: 'center',
      order: 3
    },
    [theme.breakpoints.up('sm')]: {
      order: 3,
      margin: '20px 0'
    },
  }
});

const convertStringToArray = (images: [] | string) => {
  if (Array.isArray(images)) {
    return images
  }
  else {
    return [images]
  }
}

interface ParentProps {
  product: ProductItem | any;
}

type Props = ParentProps & WithStyles<typeof styles>;

const ProductDetails: NextFunctionComponent<Props> = props => {
  const { product, classes } = props;
  const { name, description, fabric, price, images } = product;
  const textDescriptionProps = { name, description, fabric, price };
  const imagesToArray = convertStringToArray(images)
  return (
    <>
      <Grid container>
        <Grid className={classes.imageMiniatureContainer} xs={12} md={1} item>
          {imagesToArray.map((img: string, index: number) => <ImageMiniature key={index} img={img} />)}
        </Grid>
        <Grid item xs={12} md={4} className={classes.imageContainer}>
          <Grid>
            <img className={classes.mainImage} src={imagesToArray[0]} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} className={classes.descriptionContainer}>
          <ProductTextDescription {...textDescriptionProps} />
          <AddProductButton product={product} />
        </Grid>
      </Grid>
    </>
  )
}

export default withStyles(styles)(ProductDetails);

