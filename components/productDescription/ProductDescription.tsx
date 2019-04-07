import React, { Component } from 'react';
import Layout from '../layout/Layout';
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

class ProductDescription extends Component<Props> {
  render() {
    const { categories, router } = this.props;
    const { name, description } = router.query;
    return (
      <Layout
        navigationList={categories}
        URL={genderManDefault}
      >

        <h3>{name}</h3>
        <p>{description}</p>

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

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withRouter(ProductDescription));