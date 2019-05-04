import { ProductItem } from './model';

export const getProductsFromJSON = (): Promise<ProductItem> => {
  return fetch('https://vitalina-database.herokuapp.com/api/female/products')
    .then(res => {
      if (!res.ok) {
        throw new Error("Error getting the stuff");
      }
      return res;
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}