import { Dispatch as ReduxDispatch } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as gender from '../gender/actions';
import * as maleProducts from '../maleProducts/actions';
import * as card from '../card/actions';

export const actions = {
  gender,
  maleProducts,
  card
};

type RootAction = ActionType<typeof actions>;
type Dispatch = ReduxDispatch<RootAction>;

export { RootAction, Dispatch };