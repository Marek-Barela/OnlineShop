import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Products from '../products/Products';
import { getProducts } from '../../features/maleProducts/selectors';
import { genderManDefault } from '../../features/utils/gender';
import { ProductItem } from '../../features/maleProducts/model';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';
import { withRouter } from 'next/router';

interface ParentProps {
  router: any;
}

interface StateProps {
  products: ProductItem[]
}

type Props = StateProps & ParentProps

class Jeans extends Component<Props> {
  render() {
    const { products } = this.props;
    return (
      <Layout
        URL={genderManDefault}
      >
        <Products products={products} />
      </Layout>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const products = getProducts(state)

  return {
    products
  };
};

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withRouter(Jeans));