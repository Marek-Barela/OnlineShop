import React, { Component } from 'react';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import { NavigationTypes, NavigationClothes, HeaderTypes } from '../../features/lang/pl';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';

interface ParentProps {
  navigation: NavigationTypes;
  navigationList: NavigationClothes;
  header: HeaderTypes;
}

interface StateProps {

}

interface DispatchProps {

}

type Props = ParentProps & StateProps & DispatchProps;

class Home extends Component<Props> {
  render() {
    const { navigation, navigationList, header } = this.props;
    return (
      <div>
        <Header gender={header} />
        <Navigation menu={navigation} dropdownList={navigationList} />
      </div>
    )
  }
}

//const mapStateToProps = (state: RootState) => {
//const count = getCounter(state)

// return {

//};
//};

const mapDispatchToProps = {}


export default connect<StateProps, DispatchProps, {}, RootState>(null, mapDispatchToProps)(Home);