export function PassSimpleTags(tags, entity) {
  const entityTags = LowerCaseTags(entity.tags);
  const tagsToNeed = LowerCaseTags(tags);
  let pass = true;
  for (let i = 0; i < tagsToNeed.length; i += 1) {
    let curTag = tagsToNeed[i];
    if (!entityTags.includes(curTag)) {
      pass = false;
      break;
    }
  }

  return pass;
}

export function PassSimpleTagsStr(tagsToNeedStr, entity) {
  const entityTags = LowerCaseTags(entity.tags);
  const tagsToNeed = SplitTags(tagsToNeedStr);
  let pass = true;
  for (let i = 0; i < tagsToNeed.length; i += 1) {
    let curTag = tagsToNeed[i];
    if (!entityTags.includes(curTag)) {
      pass = false;
      break;
    }
  }

  return pass;
}

export function LowerCaseTags(tags) {
  const newTags = [];

  for (let i = 0; i < tags.length; i += 1) {
    newTags.push(tags[i].toLowerCase());
  }
  return newTags;
}

export function SplitTags(tagsString) {
  if (!tagsString) return [];
  console.log(tagsString);
  const tagsArr = tagsString.split(" ");
  return LowerCaseTags(tagsArr);
}
