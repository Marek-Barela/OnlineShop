import React, { Component } from 'react';
import Layout from '../layout/Layout';
import { clothes, boots, sport, accesories } from '../../features/utils/femaleNavigation';
import { getProducts } from '../../features/maleProducts/selectors';
import { genderWomanDefault } from '../../features/utils/gender';
import { ProductItem } from '../../features/maleProducts/model';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';

interface StateProps {
  products: ProductItem[]
}

type Props = StateProps;

class Shirt extends Component<Props> {
  render() {
    const { } = this.props;
    const femaleNavMenu = { clothes, boots, sport, accesories };
    return (
      <Layout
        URL={genderWomanDefault}
        nav={femaleNavMenu}
      >

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