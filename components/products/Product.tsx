import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { ProductItem } from '../../features/maleProducts/model';
import { getGender } from '../../features/gender/selectors';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { changeGender } from '../../features/gender/actions';
import { RootState } from '../../features/redux/root-reducer';
import { connect } from 'react-redux';

const styles = () => createStyles({
  product: {
    padding: '20px 10px 10px 10px',
  },
  anchor: {
    color: 'inherit',
    textDecoration: 'none'
  },
  productImg: {
    width: '100%',
    padding: '30px 10px',
    cursor: 'pointer'
  },
  description: {
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  price: {
    textAlign: 'center',
    padding: '0 0 20px 0'
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
    return (
      <>
        <Grid className={classes.product} item xs={3}>
          <Paper>
            <Link href={{ pathname: `/${genderType}/produkty/opis-produktu`, query: product }}>
              <a className={classes.anchor}>
                <img className={classes.productImg} src={product.images[0]} />
                <Typography
                  className={classes.description}
                  component="h5">
                  {product.name}
                </Typography>
              </a>
            </Link>
            <Typography
              className={classes.price}
              component="span"
              variant="caption"
            >
              {`${product.price} zł`}
            </Typography>
          </Paper>
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