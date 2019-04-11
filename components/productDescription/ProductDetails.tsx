import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddProductButton from './AddProductButton';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { ProductItem } from '../../features/maleProducts/model';
import { NextFunctionComponent } from 'next';

const styles = (theme: Theme) => createStyles({
  container: {
  },
  image: {
    maxWidth: '100%',
    margin: '0 auto',
    height: 'auto'
  },
  imageMiniatureContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.up('xs')]: {
      order: 2,
      justifyContent: 'center'
    },
    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
      flexWrap: 'initial',
      order: 1
    }
  },
  miniature: {
    padding: 5,
    [theme.breakpoints.up('sm')]: {
      padding: '0 5px',
    },
  },
  imageMiniature: {
    maxWidth: '100%',
    height: 'auto',
    [theme.breakpoints.down('xs')]: {
      maxHeight: 300
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
  },
  productName: {
    marginTop: 20,
    textTransform: 'uppercase',
    fontSize: '1em',
    letterSpacing: '2px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.4em',
    }
  },
  fabric: {
    color: "#aaaaaa"
  },
  price: {
    fontSize: '1.7em',
    margin: '10px 0',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
      margin: 0,
    },
  },
  productDescription: {
    textTransform: 'uppercase',
    fontSize: '0.85em',
    letterSpacing: '2px',
    [theme.breakpoints.down('xs')]: {
      margin: '20px 0 10px 0',
    },
  },
  description: {
    fontSize: '0.75em',
    letterSpacing: '2px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      width: 280,
      margin: '15px auto'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '14px',
      width: 500,
      margin: '15px auto'
    },
    [theme.breakpoints.up('md')]: {
      width: 500,
      margin: '15px 0',
    }
  }
});

interface ParentProps {
  product: ProductItem | any;
}

type Props = ParentProps & WithStyles<typeof styles>;

const ProductDetails: NextFunctionComponent<Props> = props => {
  const { product, classes } = props;
  const { name, description, fabric, price, images, } = product;
  return (
    <>
      <Grid container className={classes.container}>
        <Grid className={classes.imageMiniatureContainer} xs={12} md={1} item>
          {images.map((img: string, index: number) => {
            return (
              <Grid key={index} className={classes.miniature} xs={3} sm={2} md={12} item>
                <div>
                  <img className={classes.imageMiniature} src={img} />
                </div>
              </Grid>
            )
          })}
        </Grid>
        <Grid item xs={12} md={4} className={classes.imageContainer}>
          <div>
            <img className={classes.image} src={images[0]} />
          </div>
        </Grid>
        <Grid item xs={12} md={7} className={classes.descriptionContainer}>
          <Typography
            className={classes.productName}
            component="h4"
            variant="h6"
          >{name}
          </Typography>
          <Typography
            className={classes.fabric}
            component="span"
            variant="caption"
          >{fabric}
          </Typography>
          <Typography
            className={classes.price}
            component="span"
            variant="subtitle1"
          >{price} ZŁ
          </Typography>
          <Typography
            className={classes.productDescription}
            component="h6"
            variant="h6"
          >Opis Produktu:
          </Typography>
          <Typography
            className={classes.description}
            component="p"
            variant="subtitle1"
          >{description}
          </Typography>
          <AddProductButton product={product} />
        </Grid>
      </Grid>
    </>
  )
}

export default withStyles(styles)(ProductDetails);

