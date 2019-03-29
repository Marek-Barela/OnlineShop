import React, { Component } from 'react';
import Layout from '../layout/Layout';
import { withRouter } from 'next/router';
import { NavigationTypes, NavigationClothes, HeaderTypes } from '../../features/lang/eng';

interface Props {
  navigation: NavigationTypes;
  navigationList: NavigationClothes;
  header: HeaderTypes;
  router: any;
}

export interface Gender {
  woman: string;
  man: string;
  defaultGender: string;
}

class Man extends Component<Props> {
  render() {
    const { header, navigation, navigationList, router } = this.props;
    const genderURL: Gender = { woman: '/eng/woman', man: '/eng/man', defaultGender: 'man' };
    return (
      <Layout
        header={header}
        navigation={navigation}
        navigationList={navigationList}
        URL={genderURL}
      >
        <div>
          {router.query.title}
        </div>
      </Layout>
    )
  }
}

export default withRouter(Man);