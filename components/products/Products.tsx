import React, { Component } from 'react';
import Layout from '../layout/Layout';
import { getProducts } from '../../features/maleProducts/selectors';
import { JSONCategoriesResponse } from '../../features/maleProducts/model';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';
import { withRouter } from 'next/router';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({

});

interface ParentProps {
  router: any;
}

interface StateProps {
  categories: JSONCategoriesResponse
}

type Props = StateProps & ParentProps & WithStyles<typeof styles>;

export interface Gender {
  woman: string;
  man: string;
  defaultGender: string;
}

class Products extends Component<Props> {
  render() {
    const { categories } = this.props;
    const genderURL: Gender = { woman: '/kobieta', man: '/mezczyzna', defaultGender: 'man' };
    return (
      <Layout
        navigationList={categories}
        URL={genderURL}
      >

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

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withStyles(styles)(withRouter(Products)));