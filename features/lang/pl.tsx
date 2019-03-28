export interface NavigationTypes {
  clothes: string,
  boots: string,
  sport: string,
  accesories: string
}

export interface NavigationClothes {
  navClothes: {}[];
  navBoots: {}[];
  navSport: {}[];
  navAccesories: {}[];
}

export const header = {

}

export const navigation: NavigationTypes = {
  clothes: 'ODZIEŻ',
  boots: "OBUWIE",
  sport: "SPORT",
  accesories: "AKCESORIA"
}

export const navigationList: NavigationClothes = {
  navClothes: [
    {
      product: "Spodnie"
    },
    {
      product: "TShirt"
    },
    {
      product: "Spodnie"
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