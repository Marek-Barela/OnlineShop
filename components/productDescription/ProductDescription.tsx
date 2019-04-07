import React, { Component } from 'react';
import Layout from '../layout/Layout';
import ProductDetails from './ProductDetails';
import Grid from '@material-ui/core/Grid';
import { getProducts } from '../../features/maleProducts/selectors';
import { genderManDefault } from '../../features/utils/gender';
import { JSONCategoriesResponse } from '../../features/maleProducts/model';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';
import { withRouter } from 'next/router';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '80px 0'
  }
});

interface ParentProps {
  router: any;
}

interface StateProps {
  categories: JSONCategoriesResponse
}

type Props = StateProps & ParentProps & WithStyles<typeof styles>;

class ProductDescription extends Component<Props> {
  render() {
    const { categories, router, classes } = this.props;
    return (
      <Layout
        navigationList={categories}
        URL={genderManDefault}
      >
        <Grid className={classes.container} container>
          <ProductDetails product={router.query} />
        </Grid>
      </Layout>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const categories = getProducts(state)

  return {
    categories
  };
};

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withRouter(withStyles(styles)(ProductDescription)));