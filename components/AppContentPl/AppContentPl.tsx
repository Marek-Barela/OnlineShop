import React, { Component } from 'react';
import Layout from '../layout/Layout';
import { withRouter } from 'next/router'
import { NavigationTypes, NavigationClothes, HeaderTypes } from '../../features/lang/pl';

interface Props {
  navigation: NavigationTypes;
  navigationList: NavigationClothes;
  header: HeaderTypes;
  router: any;
}

class AppContentPl extends Component<Props> {
  render() {
    const { header, navigation, navigationList, router } = this.props;
    return (
      <Layout
        header={header}
        navigation={navigation}
        navigationList={navigationList}
      >
        <div>
          {router.query.title}
        </div>
      </Layout>
    )
  }
}

export default withRouter(AppContentPl);