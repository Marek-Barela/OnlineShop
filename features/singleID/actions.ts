import { createAction } from 'typesafe-actions';

export const setSingleId = createAction(
  'setproductid/SET_SINGLE_ID',
  setID => { return (id: string) => setID(id) }
);

export const setSingleGender = createAction(
  'setproductgender/SET_SINGLE_GENDER',
  setGender => { return (gender: string) => setGender(gender) }
);