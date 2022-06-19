export class View {
  /**
   *
   * @param {Number} id
   * @param {*} name
   * @param {Array<Int>} entityIDs
   * @param {View} views
   */
  constructor(
    id,
    name,

    entityIDs = [],
    views = [],
    tags = null,
    description = "",
    imageURL = null
  ) {
    this.id = id;
    this.name = name;
    this.entityIDs = entityIDs;
    this.views = views;
    this.order = [];
    this.tags = tags;
    this.description = description;
    this.image = null;
    this.imageURL = imageURL;
    this.subViewOnly = false;
  }
}

export const newViewLambda = (id, name, entityIDs = [], views = []) => {
  return {
    id: id,
    name: name,
    entityIDs: entityIDs,
    views: views
  };
};

export const totalViewLambda = (
  id = 0,
  name = "",
  entityIDs = [],
  views = [],
  tags = [],
  descr = "",
  image = null,
  imageURL = "",
  subViewOnly = false
) => {
  return {
    id: id,
    name: name,
    entityIDs: entityIDs,
    views: views,
    tags: tags,
    description: descr,
    image: image,
    imageURL: imageURL,
    subViewOnly: subViewOnly
  };
};
