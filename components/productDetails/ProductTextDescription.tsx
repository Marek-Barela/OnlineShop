import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { NextFunctionComponent } from 'next';

const styles = (theme: Theme) => createStyles({
  productName: {
    marginTop: 20,
    textTransform: 'uppercase',
    fontSize: '1em',
    letterSpacing: '2px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.4em',
    }
  },
  fabricText: {
    color: "#888888",
    fontWeight: 'bold'
  },
  priceText: {
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
  descriptionText: {
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
  name: string;
  fabric: string[];
  price: string;
  description: string;
}

type Props = ParentProps & WithStyles<typeof styles>;

const ProductTextDescription: NextFunctionComponent<Props> = props => {
  const { classes, name, fabric = [], price, description } = props;
  const { productName, fabricText, priceText, productDescription, descriptionText } = classes;
  const fabricTextDescription = fabric.join(" ");
  return (
    <>
      <Typography
        className={productName}
        component="h4"
        variant="h6"
      >{name}
      </Typography>
      <Typography
        className={fabricText}
        component="span"
        variant="caption"
      >{fabricTextDescription}
      </Typography>
      <Typography
        className={priceText}
        component="span"
        variant="subtitle1"
      >{price} ZŁ
      </Typography>
      <Typography
        className={productDescription}
        component="h6"
        variant="h6"
      >Opis Produktu:
      </Typography>
      <Typography
        className={descriptionText}
        component="p"
        variant="subtitle1"
      >{description}
      </Typography>
    </>
  )
}

export default withStyles(styles)(ProductTextDescription);;