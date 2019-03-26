import React, { Component } from 'react';
import { incrementCounter, decrementCounter } from '../../features/counter/actions';
import { getCounter } from '../../features/counter/selectors';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';

interface StateProps {
  count: number;
}

interface DispatchProps {
  onDecrement: () => void;
  onIncrement: () => void;
}

type Props = StateProps & DispatchProps;

class Counter extends Component<Props> {
  render() {
    const { count, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <h2>Counter</h2>
        <button onClick={onIncrement}>+1</button>
        <button onClick={onDecrement}>-1</button>
        <span>Result: {`${count}`}</span>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const count = getCounter(state)

  return {
    count
  };
};

const mapDispatchToProps = {
  onIncrement: incrementCounter,
  onDecrement: decrementCounter
}


export default connect<StateProps, DispatchProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(Counter);