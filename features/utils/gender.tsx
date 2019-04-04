export interface Gender {
  woman: string;
  man: string;
  defaultGender: string;
}

export const genderManDefault: Gender = { woman: '/kobieta', man: '/mezczyzna', defaultGender: 'mezczyzna' };

export const genderWomanDefault: Gender = { woman: '/kobieta', man: '/mezczyzna', defaultGender: 'kobieta' };