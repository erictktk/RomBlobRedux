//0x03C289 = Power Up from Heat Man (Default: 01)
export const entity1 = {
  id: 0,
  name: "Heat Man Power Up",
  tags: ["Heat-Man", "Power-Up", "Weapon", "Player-Weapon"],
  memoryPosition: 0x03c289,
  memoryOffset: 0,
  defaultValue: 1
};

//0x0380D5 = Beginning amount of Health (Default: 1C)
export const entity2 = {
  id: 1,
  name: "Starting Health",
  tags: ["Megaman", "Player", "Health"],
  memoryPosition: 0x0380d5,
  memoryOffset: 0,
  defaultValue: 0x1c
};

const generateEntity = (e) => {
  const dateAdded = new Date();
  return {
    id: e.id,
    name: e.name,
    tags: e.tags,
    memoryPosition: e.memoryPosition,
    originalValue: e.defaultValue,
    newValue: null,
    dateAdded: dateAdded.toString(),
    author: "parry practicer"
  };
};

export const fakeEntityList = [
  generateEntity(entity1),
  generateEntity(entity2)
];
