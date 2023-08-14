type Hero = {
  id: string;
  name: string;
  biography: {
    ["full-name"]: string;
  };
  image: {
    url: string;
  };
  powerstats: PowerStats;
};

type PowerStats = {
  combat: string;
  durability: string;
  intelligence: string;
  power: string;
  speed: string;
  strength: string;
  [key: string]: string;
};

export type { Hero, PowerStats };
