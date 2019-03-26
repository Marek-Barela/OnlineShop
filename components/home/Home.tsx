import React, { Component } from 'react';
import Header from '../header/Header';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';

interface StateProps {

}

interface DispatchProps {

}

type Props = StateProps & DispatchProps;

class Home extends Component<Props> {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  //const count = getCounter(state)

  return {

  };
};

const mapDispatchToProps = {}


export default connect<StateProps, DispatchProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(Home);