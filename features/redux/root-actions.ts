import { Dispatch as ReduxDispatch } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as counter from '../counter/actions';
import * as gender from '../gender/actions';

export const actions = {
  counter,
  gender
};

type RootAction = ActionType<typeof actions>;
type Dispatch = ReduxDispatch<RootAction>;

export { RootAction, Dispatch };