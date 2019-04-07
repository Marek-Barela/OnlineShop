export interface JSONCategoriesLanguageResponse {
  pl: JSONCategoriesResponse
}

export interface JSONCategoriesResponse {
  clothes: Products[];
  boots: Products[];
  sport: Products[];
  accesories: Products[];
}

export interface Products {
  label: string;
  endpoint: string;
  products: ProductItem[];
}

export interface ProductItem {
  id: string;
  name: string;
  price: string;
  color: string;
  description: string;
  fabric: string[];
  images: string[];
}