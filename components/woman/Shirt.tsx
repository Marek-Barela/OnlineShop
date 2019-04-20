import React, { Component } from 'react';
import Layout from '../layout/Layout';
import { getProducts } from '../../features/maleProducts/selectors';
import { genderWomanDefault } from '../../features/utils/gender';
import { ProductItem } from '../../features/maleProducts/model';
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
  products: ProductItem[]
}

type Props = StateProps & ParentProps & WithStyles<typeof styles>;

class Shirt extends Component<Props> {
  render() {
    const { } = this.props;
    return (
      <Layout
        URL={genderWomanDefault}
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

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withStyles(styles)(withRouter(Shirt)));