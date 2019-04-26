import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Divider from '@material-ui/core/Divider';
import { ProductItem } from '../../features/maleProducts/model';
import { getGender } from '../../features/gender/selectors';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { changeGender } from '../../features/gender/actions';
import { RootState } from '../../features/redux/root-reducer';
import { connect } from 'react-redux';

const styles = () => createStyles({
  productContainer: {
    padding: '20px 10px 10px 10px',
  },
  product: {
    margin: 15
  },
  anchor: {
    color: 'inherit',
    textDecoration: 'none'
  },
  productImg: {
    width: '100%',
    cursor: 'pointer'
  },
  description: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '0.7em',
    fontWeight: 'bold',
    marginTop: 15
  },
  price: {
    textAlign: 'center',
    padding: '0 0 20px 0',
    fontSize: '0.7em'
  }
});

interface ParentProps {
  product: ProductItem
}

interface StateProps {
  genderType: string;
}

type Props = ParentProps & StateProps & WithStyles<typeof styles>;

class Product extends Component<Props> {
  render() {
    const { classes, product, genderType } = this.props;
    const { images, name, price, _id } = product;
    return (
      <>
        <Grid className={classes.productContainer} item xs={12} sm={6} md={4} lg={3}>
          <Grid className={classes.product}>
            <Link href={{ pathname: `/${genderType}/produkty/opis-produktu`, query: { _id } }}>
              <a className={classes.anchor}>
                <img className={classes.productImg} src={images[0]} alt="produkt" />
                <Typography
                  className={classes.description}
                  component="h5">
                  {name}
                </Typography>
              </a>
            </Link>
            <Typography
              className={classes.price}
              component="span"
              variant="caption"
            >
              {`${price} zł`}
            </Typography>
            <Divider />
          </Grid>
        </Grid>
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const genderType = getGender(state);

  return {
    genderType,
  };
};

const mapDispatchToProps = {
  onGenderChange: changeGender,
};

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Product));