const enum CardCategory {
  BROWN,
  GREY,
  BLUE,
  YELLOW,
  RED,
  GREEN,
  PURPLE
}

const enum CountCategory {
  WONDERS = 'wonders',
  TREASURE = 'treasure',
  MILITARY = 'military',
  BLUE = 'civil',
  YELLOW = 'commercial',
  GREEN = 'science',
  PURPLE = 'guilds',
  LEADERS = 'leaders',
  CITIES = 'cities',
  NAVAL = 'naval',
  ISLAND = 'island'
}

interface IVictoryPoint {
  category: CountCategory;
  name: string;
  color?: string;
}

const VictoryPoints: Array<IVictoryPoint> = [
  {
    category: CountCategory.WONDERS,
    name: 'Wonders Board'
  },
  {
    category: CountCategory.TREASURE,
    name: 'Treasure'
  },
  {
    category: CountCategory.MILITARY,
    name: 'Military Conflicts'
  },
  {
    category: CountCategory.BLUE,
    name: 'Blue Cards',
    color: ''
  },
  {
    category: CountCategory.YELLOW,
    name: 'Yellow Cards',
    color: ''
  },
  {
    category: CountCategory.GREEN,
    name: 'Green Cards',
    color: ''
  },
  {
    category: CountCategory.PURPLE,
    name: 'Purple Cards',
    color: ''
  },
  {
    category: CountCategory.LEADERS,
    name: 'Leaders Cards',
    color: ''
  },
  {
    category: CountCategory.CITIES,
    name: 'Cities Cards',
    color: ''
  },
  {
    category: CountCategory.NAVAL,
    name: 'Naval Conflicts'
  },
  {
    category: CountCategory.ISLAND,
    name: 'Island Cards'
  }
];

export { CardCategory, CountCategory, VictoryPoints };
