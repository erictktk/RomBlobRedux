import { entityLambda, simpleEntity } from "../Entity";

/*
Address	Function	Details	Default value
0x0352AC	The amount of energy that E-Tanks set		1C
0x03539E	Sound effect for turning off menu during action		30
0x0353E8	Starting Y position of the weapon icon sprites		44
0x035403	X position of the weapon icon sprites		0C
0x03542C	Y position of Mega Man's health bar		44
0x03543D	Y position of the first set of weapon energy bars		54
0x03549C	Y position of the second set of weapon energy bars		44
0x03559E - 0x03562D	Pause menu tile layout */

const eTanksEnergy = simpleEntity(
  50,
  "E-Tanks Energy",
  "The amount of energy that E-Tanks set",
  0x0352ac,
  0x1c
);

const soundEffectMenu = simpleEntity(
  51,
  "SoundEffectMenuTurnOff",
  "Sound effect for turning off menu during action",
  0x03539e,
  0x30
);

//0x0353E8	Starting Y position of the weapon icon sprites
const startYPosWeaponIcon = simpleEntity(
  52,
  "startYPosWeaponIcon",
  "Starting Y position of the weapon icon sprites",
  0x0353e8,
  0x44
);

//0x035403	X position of the weapon icon sprites		0C
const startXPosWeaponIconSpr = simpleEntity(
  53,
  "XPosWeaponIcon",
  "X position of the weapon icon sprites",
  0x035403,
  0x0c,
  ["Heat Man"]
);

//#region Heat Man
const atomicFire1VelocityY = simpleEntity(
  54,
  "Atomic Fire 1's y-velocity",
  "",
  0x02c207,
  0x07,
  ["Heat-Man"]
);

const atomicFire2VelocityY = simpleEntity(
  55,
  "Atomic Fire 2's y-velocity",
  "",
  0x02c208,
  0x05,
  ["Heat-Man"]
);

const numAtomicFiresThrown = simpleEntity(
  56,
  "Number of Atomic Fires Thrown",
  "Extra shots tend to be glitchy.",
  0x02c1a1,
  0x02,
  ["Heat-Man"]
);

const ChargeXVelocity = simpleEntity(
  57,
  "Charge x-velocity",
  "X position of the weapon icon sprites",
  0x02c253,
  0x04,
  ["Heat-Man"]
);

export const HeatManEntities = [
  atomicFire1VelocityY,
  atomicFire2VelocityY,
  numAtomicFiresThrown,
  ChargeXVelocity
];
//#endregion
