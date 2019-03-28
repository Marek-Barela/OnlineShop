import React, { Component } from 'react';
import Layout from '../layout/Layout';
import { NavigationTypes, NavigationClothes, HeaderTypes } from '../../features/lang/eng';

interface Props {
  navigation: NavigationTypes;
  navigationList: NavigationClothes;
  header: HeaderTypes;
}

class AppContentEng extends Component<Props> {
  render() {
    const { header, navigation, navigationList } = this.props;
    return (
      <Layout
        header={header}
        navigation={navigation}
        navigationList={navigationList}
      >
        <div></div>
      </Layout>
    )
  }
}

export default AppContentEng;