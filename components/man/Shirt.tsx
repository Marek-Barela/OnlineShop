import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Products from '../products/Products';
import { routeShirt } from '../../features/utils/routesLabels';
import { getProducts } from '../../features/maleProducts/selectors';
import { genderManDefault } from '../../features/utils/gender';
import { JSONCategoriesResponse } from '../../features/maleProducts/model';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';
import { withRouter } from 'next/router';

interface ParentProps {
  router: any;
}

interface StateProps {
  categories: JSONCategoriesResponse
}

type Props = StateProps & ParentProps;

class Shirt extends Component<Props> {
  render() {
    const { categories } = this.props;
    const products = categories.clothes.filter(category => category.label === routeShirt);
    return (
      <Layout
        URL={genderManDefault}
      >
        <Products productsList={products} />
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

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withRouter(Shirt));