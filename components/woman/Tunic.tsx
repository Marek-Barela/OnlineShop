import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Products from '../products/Products';
import { clothes, boots, sport, accesories } from '../../features/utils/femaleNavigation';
import { getProducts } from '../../features/femaleProductsTunic/selectors';
import { genderWomanDefault } from '../../features/utils/gender';
import { ProductItem } from '../../features/femaleProducts/model';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';

interface StateProps {
  products: ProductItem[]
}

type Props = StateProps;

class Dress extends Component<Props> {
  render() {
    const { products } = this.props;
    const femaleNavMenu = { clothes, boots, sport, accesories };
    return (
      <Layout
        URL={genderWomanDefault}
        nav={femaleNavMenu}
      >
        <Products
          products={products}
          label="Tuniki"
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

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(Dress);