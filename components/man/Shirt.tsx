import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Products from '../products/Products';
import { clothes, boots, sport, accesories } from '../../features/utils/maleNavigation';
import { getProducts } from '../../features/maleProductsShirts/selectors';
import { genderManDefault } from '../../features/utils/gender';
import { ProductItem } from '../../features/maleProducts/model';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';

interface StateProps {
  products: ProductItem[]
}

type Props = StateProps;

class Shirt extends Component<Props> {
  render() {
    const { products } = this.props;
    const maleNavMenu = { clothes, boots, sport, accesories }
    return (
      <Layout
        URL={genderManDefault}
        nav={maleNavMenu}
      >
        <Products
          products={products}
          label="Koszule Męskie"
        />
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

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(Shirt);