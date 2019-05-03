import { ProductItem } from '../maleProducts/model';

export const getProductsFromJSON = (): Promise<ProductItem> => {
  return fetch('https://vitalina-database.herokuapp.com/api/male/products/shoes')
    .then(res => {
      if (!res.ok) {
        throw new Error("Error getting the stuff");
      }
      return res;
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}