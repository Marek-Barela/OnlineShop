import { JSONCategoriesResponse } from './model';

export const getProductsFromJSON = (): Promise<JSONCategoriesResponse> => {
  return fetch('https://api.myjson.com/bins/oksog')
    .then(res => {
      if (!res.ok) {
        throw new Error("Error getting the stuff");
      }
      return res;
    })
    .then(res => res.json())
    .then(res => { return res })
    .catch(err => console.log(err))
}