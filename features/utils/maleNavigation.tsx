export interface NavigationElement {
  label: string;
  endpoint: string;
}

export const clothes: NavigationElement[] = [
  {
    label: "Koszule Męskie",
    endpoint: "/mezczyzna/produkty/koszule-meskie"
  },
  {
    label: "Jeansy Męskie",
    endpoint: "/mezczyzna/produkty/jeansy-meskie"
  },
  {
    label: "Kurtki Męskie",
    endpoint: "/mezczyzna/produkty/kurtki-meskie"
  },
  {
    label: "Spodnie Męskie",
    endpoint: "/mezczyzna/produkty/spodnie-meskie"
  }
];

export const boots: NavigationElement[] = [
  {
    label: "Sztyblety Męskie",
    endpoint: "/mezczyzna/produkty/sztyblety-meskie"
  },
  {
    label: "Mokasyny Męskie",
    endpoint: "/mezczyzna/produkty/mokasyny-meskie"
  },
  {
    label: "Trzewiki Męskie",
    endpoint: "/mezczyzna/produkty/trzewiki-meskie"
  }
];

export const sport: NavigationElement[] = [
  {
    label: "Dresy Męskie",
    endpoint: "/mezczyzna/produkty/dresy-meskie"
  },
  {
    label: "Koszulki Sportowe Męskie",
    endpoint: "/mezczyzna/produkty/koszulki-sportowe-meskie"
  }
];

export const accesories: NavigationElement[] = [
  {
    label: "Plecaki",
    endpoint: "/mezczyzna/produkty/plecaki"
  },
  {
    label: "Torby Męskie",
    endpoint: "/mezczyzna/produkty/torby-meskie"
  },
  {
    label: "Zegarki",
    endpoint: "/mezczyzna/produkty/zegarki"
  },
  {
    label: "Biżuteria",
    endpoint: "/mezczyzna/produkty/bizuteria"
  }
];