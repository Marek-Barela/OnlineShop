import React, { Component } from 'react';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import { NavigationTypes, NavigationClothes } from '../../features/lang/pl';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';

interface ParentProps {
  navigation: NavigationTypes;
  navigationList: NavigationClothes;
}

interface StateProps {

}

interface DispatchProps {

}

type Props = ParentProps & StateProps & DispatchProps;

class Home extends Component<Props> {
  render() {
    const { navigation, navigationList } = this.props;
    return (
      <div>
        <Header />
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