export interface JSONCategoriesLanguageResponse {
  pl: JSONCategoriesResponse
}

export interface JSONCategoriesResponse {
  clothes: {
    shirt: Products[];
    jeans: Products[];
    jacket: Products[];
    trousers: Products[];
    sweater: Products[];
  },
  boots: {
    elasticsides: Products[];
    moccasins: Products[];
    shoes: Products[];
  },
  sport: {
    tracksuit: Products[];
    sportshirt: Products[];
    sportjacket: Products[];
  },
  accesories: {
    backpack: Products[];
    bags: Products[];
    watches: Products[];
    jewelry: Products[];
  }
}

export interface Products {
  label: string;
  products: ProductItem[];
}

export interface ProductItem {
  id: string;
  name: string;
  price: string;
  color: string;
  description: string;
  fabric: [{
    material: string;
  }]
  images: [{
    image: string;
  }]
}