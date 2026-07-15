export type WeaponAttachment = {
  type: string;
  name: string;
};

export type WeaponMode =
  | "Battle Royale"
  | "Résurgence"
  | "Ranked"
  | "Multijoueur"
  | "Zombies";

export type WeaponTier = "S+" | "S" | "A" | "B";

export type Weapon = {
  id: string;
  name: string;
  slug: string;
  category: string;
  role: string;
  description: string;

  tier: WeaponTier;
  score: number;

  modes: WeaponMode[];
  tags: string[];

  attachments: WeaponAttachment[];

  loadoutCode?: string;
  image?: string;
  model3d?: string;

  updatedAt: string;
};

export const weapons: Weapon[] = [
  {
    id: "carbon-57",
    name: "Carbon 57",
    slug: "carbon-57",
    category: "Mitraillette",
    role: "Corps à corps",
    description:
      "Une mitraillette très mobile, conçue pour les combats rapprochés et les joueurs agressifs.",

    tier: "S+",
    score: 98,

    modes: ["Battle Royale", "Résurgence", "Ranked"],

    tags: [
      "Mobilité",
      "Rush",
      "Courte portée",
      "TTK rapide",
    ],

    attachments: [
      {
        type: "Bouche",
        name: "LTI Stentorian Brake",
      },
      {
        type: "Canon",
        name: '8.6" Orbital Light Barrel',
      },
      {
        type: "Accessoire canon",
        name: "VAS Convergence Foregrip",
      },
      {
        type: "Chargeur",
        name: "MFS Renown Plus Mag",
      },
      {
        type: "Crosse",
        name: "Hammer Platoon Pad",
      },
    ],

    loadoutCode: "S05-9CWYE-H511",

    image: "/weapons/carbon-57.png",
    model3d: "/models/carbon-57.glb",

    updatedAt: "2026-07-15",
  },

  {
    id: "mxr-17",
    name: "MXR-17",
    slug: "mxr-17",
    category: "Fusil d’assaut",
    role: "Longue portée",
    description:
      "Un fusil d’assaut stable et polyvalent, adapté aux combats à moyenne et longue portée.",

    tier: "S+",
    score: 96,

    modes: ["Battle Royale", "Ranked"],

    tags: [
      "Longue portée",
      "Faible recul",
      "Stable",
      "Polyvalent",
    ],

    attachments: [
      {
        type: "Optique",
        name: "FANG HoverPoint ELO",
      },
      {
        type: "Bouche",
        name: "Monolithic Suppressor",
      },
      {
        type: "Canon",
        name: '17" Greaves Scourge Barrel',
      },
      {
        type: "Chargeur",
        name: "Rhodes Drum Mag",
      },
      {
        type: "Crosse",
        name: "Winch Stock",
      },
    ],

    loadoutCode: "A03-36W2S-J343H-11",

    image: "/weapons/mxr-17.png",
    model3d: "/models/mxr-17.glb",

    updatedAt: "2026-07-15",
  },

  {
    id: "strider-300",
    name: "Strider 300",
    slug: "strider-300",
    category: "Fusil de précision",
    role: "Sniper",
    description:
      "Un sniper puissant pour engager les adversaires à longue distance et couvrir les rotations.",

    tier: "S",
    score: 91,

    modes: ["Battle Royale", "Ranked"],

    tags: [
      "Sniper",
      "Précision",
      "Grande portée",
      "Dégâts élevés",
    ],

    attachments: [
      {
        type: "Bouche",
        name: "Monolithic Suppressor",
      },
      {
        type: "Canon",
        name: '25" Bowen Grooved Barrel',
      },
      {
        type: "Chargeur",
        name: "Carnation Fast Mag",
      },
      {
        type: "Poignée arrière",
        name: "Hatch Quick Grip",
      },
      {
        type: "Mod de tir",
        name: ".300 WM Overpressured",
      },
    ],

    loadoutCode: "R07-2JD6P-5NM5G-6J11",

    image: "/weapons/strider-300.png",
    model3d: "/models/strider-300.glb",

    updatedAt: "2026-07-15",
  },

  {
    id: "ak-27",
    name: "AK-27",
    slug: "ak-27",
    category: "Fusil d’assaut",
    role: "Longue portée",
    description:
      "Une arme puissante offrant d’excellents dégâts par balle et une bonne efficacité à distance.",

    tier: "S",
    score: 92,

    modes: ["Battle Royale", "Ranked", "Multijoueur"],

    tags: [
      "Dégâts élevés",
      "Longue portée",
      "Précision",
      "Polyvalent",
    ],

    attachments: [
      {
        type: "Optique",
        name: "FANG HoverPoint ELO",
      },
      {
        type: "Bouche",
        name: "Monolithic Suppressor",
      },
      {
        type: "Canon",
        name: '17.6" Vandal Heavy Barrel',
      },
      {
        type: "Chargeur",
        name: "Saber Pack Heavy Drum",
      },
      {
        type: "Crosse",
        name: "Pugil Heavy Stock",
      },
    ],

    loadoutCode: "A02-2G9PV-4C1XB-11",

    image: "/weapons/ak-27.png",
    model3d: "/models/ak-27.glb",

    updatedAt: "2026-07-15",
  },

  {
    id: "dravec-45",
    name: "Dravec 45",
    slug: "dravec-45",
    category: "Mitraillette",
    role: "Corps à corps",
    description:
      "Une mitraillette facile à contrôler, particulièrement efficace dans les bâtiments.",

    tier: "S",
    score: 93,

    modes: ["Résurgence", "Ranked", "Multijoueur"],

    tags: [
      "Facile à utiliser",
      "Courte portée",
      "Mobilité",
      "Bâtiments",
    ],

    attachments: [
      {
        type: "Bouche",
        name: "Bowen .45 Suppressor",
      },
      {
        type: "Canon",
        name: 'EAM Horizon Barrel 19"',
      },
      {
        type: "Laser",
        name: "MFS Agile Laser Pro",
      },
      {
        type: "Chargeur",
        name: "Gator Extended Mag",
      },
      {
        type: "Mod de tir",
        name: "Bolt Carrier Group",
      },
    ],

    loadoutCode: "S04-BGW2E-IYU11",

    image: "/weapons/dravec-45.png",
    model3d: "/models/dravec-45.glb",

    updatedAt: "2026-07-15",
  },

  {
    id: "vx-compact",
    name: "VX Compact",
    slug: "vx-compact",
    category: "Fusil d’assaut",
    role: "Support sniper",
    description:
      "Une arme rapide et polyvalente, idéale pour accompagner un fusil de précision.",

    tier: "S",
    score: 90,

    modes: ["Battle Royale", "Résurgence"],

    tags: [
      "Support sniper",
      "Moyenne portée",
      "Mobilité",
      "Polyvalent",
    ],

    attachments: [
      {
        type: "Optique",
        name: "FANG HoverPoint ELO",
      },
      {
        type: "Bouche",
        name: "Redwell Shade-X Suppressor",
      },
      {
        type: "Canon",
        name: 'Redwell Ascent 14.3"',
      },
      {
        type: "Chargeur",
        name: "Inclination Extended Mag",
      },
      {
        type: "Crosse",
        name: "Lactic Light Stock",
      },
    ],

    loadoutCode: "A14-34FBS-LIF4B-11",

    image: "/weapons/vx-compact.png",
    model3d: "/models/vx-compact.glb",

    updatedAt: "2026-07-15",
  },
];

export function getWeaponBySlug(
  slug: string,
): Weapon | undefined {
  return weapons.find((weapon) => weapon.slug === slug);
}

export function getWeaponById(
  id: string,
): Weapon | undefined {
  return weapons.find((weapon) => weapon.id === id);
}

export function getWeaponsByMode(
  mode: WeaponMode,
): Weapon[] {
  return weapons.filter((weapon) =>
    weapon.modes.includes(mode),
  );
}

export function getWeaponsByCategory(
  category: string,
): Weapon[] {
  return weapons.filter(
    (weapon) => weapon.category === category,
  );
}

export function getTopWeapons(
  limit = 3,
): Weapon[] {
  return [...weapons]
    .sort((firstWeapon, secondWeapon) => {
      return secondWeapon.score - firstWeapon.score;
    })
    .slice(0, limit);
}
