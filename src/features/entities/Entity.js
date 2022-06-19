export default class Entity {
  constructor(id = 0, name = "", tags = [], author = "Unnamed") {
    this.id = id;
    if (name === "") {
      this.name = "new Entity " + id;
    } else {
      this.name = name;
    }
    this.tags = tags;
    //this.categories = categories;
    this.memoryType = 0;
    this.memoryPosition = 0;
    this.memoryOffset = 0;
    //this.author = "";
    this.description = "";

    this.originalValue = -1;
    this.newValue = -1;

    this.author = author;
    this.dateAdded = new Date();

    //this.comments = [];
  }
}

export const simpleEntity = (
  id = 0,
  name = "",
  descr = "",
  memoryPosition,
  originalValue = -1,
  tags = []
) => {
  if (name === "") {
    name = "new Entity " + id;
  }
  return {
    id: id,
    name: name,
    tags: tags,
    memoryPosition: memoryPosition,
    memoryOffset: 0,
    description: descr,

    originalValue: -1,
    newValue: -1,
    dateAdded: new Date().toString()
  };
};

export const entityLambda = (
  id = 0,
  name = "",
  tags = [],
  author = "",
  descr = ""
) => {
  if (name === "") {
    name = "new Entity " + id;
  }
  return {
    id: id,
    name: name,
    tags: tags,
    memoryPosition: 0,
    memoryOffset: 0,
    description: descr,

    originalValue: -1,
    newValue: -1,
    dateAdded: new Date().toString()
  };
};
