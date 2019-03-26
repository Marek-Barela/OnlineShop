import { Dispatch as ReduxDispatch } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as counter from '../counter/actions';

export const actions = {
  counter
};

type RootAction = ActionType<typeof actions>;
type Dispatch = ReduxDispatch<RootAction>;

export { RootAction, Dispatch };