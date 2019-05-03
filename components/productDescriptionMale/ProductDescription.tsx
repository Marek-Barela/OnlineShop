import React, { Component } from 'react';
import Layout from '../layout/Layout';
import ProductDetails from '../productDetails/ProductDetails';
import Grid from '@material-ui/core/Grid';
import { clothes, boots, sport, accesories } from '../../features/utils/maleNavigation';
import { getSingleProduct } from '../../features/singleMaleProduct/selectors';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { genderManDefault } from '../../features/utils/gender';
import { ProductItem } from '../../features/maleProducts/model';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '80px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 0'
    }
  }
});

interface StateProps {
  product: ProductItem
}

type Props = StateProps & WithStyles<typeof styles>;

class ProductDescription extends Component<Props> {
  render() {
    const { classes, product } = this.props;
    const maleNavMenu = { clothes, boots, sport, accesories };
    return (
      <Layout
        URL={genderManDefault}
        nav={maleNavMenu}
      >
        <Grid className={classes.container} container>
          <ProductDetails product={product} />
        </Grid>
      </Layout>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const product = getSingleProduct(state)

  return {
    product
  };
};

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withStyles(styles)(ProductDescription));