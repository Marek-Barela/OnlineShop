import { createAction } from 'typesafe-actions';

export const changeGender = createAction(
  'gender/SWITCH_GENDER',
  changeGender => { return (type: string) => changeGender(type) }
);