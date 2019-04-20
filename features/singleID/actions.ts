import { createAction } from 'typesafe-actions';

export const setSingleId = createAction(
  'setproductid/SET_SINGLE_ID',
  setID => { return (id: string) => setID(id) }
);