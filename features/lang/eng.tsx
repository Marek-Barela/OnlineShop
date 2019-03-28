export interface NavigationTypes {
  clothes: string,
  boots: string,
  sport: string,
  accesories: string
}

export interface HeaderTypes {
  woman: string,
  man: string,
}

export interface NavigationClothes {
  navClothes: {}[];
  navBoots: {}[];
  navSport: {}[];
  navAccesories: {}[];
}

export const header: HeaderTypes = {
  woman: "WOMAN",
  man: "MAN"
}

export const navigation: NavigationTypes = {
  clothes: 'CLOTHES',
  boots: "BOOTS",
  sport: "SPORT",
  accesories: "ACCESORIES"
}

export const navigationList: NavigationClothes = {
  navClothes: [
    {
      product: "Pants"
    },
    {
      product: "TShirt"
    },
    {
      product: "Pants"
    },
    {
      product: "TShirt"
    }
  ],
  navBoots: [
    {
      product: "Fast"
    },
    {
      product: "Slow"
    }
  ],
  navSport: [
    {
      product: "Nike"
    },
    {
      product: "Adidas"
    },
    {
      product: "Nike"
    },
    {
      product: "Adidas"
    }
  ],
  navAccesories: [
    {
      product: "Phones"
    },
    {
      product: "Rubber"
    },
    {
      product: "Phones"
    },
    {
      product: "Rubber"
    },
    {
      product: "Phones"
    },
    {
      product: "Rubber"
    }
  ]
}