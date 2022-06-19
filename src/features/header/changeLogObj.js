//import { }

/*
## [1.0.0] - 2017-06-20
### Added
- New visual identity by [@tylerfortune8](https://github.com/tylerfortune8).
- Version navigation.
- Links to latest released version in previous versions.
- "Why keep a changelog?" section.
- "Who needs a changelog?" section.
- "How do I make a changelog?" section.
- "Frequently Asked Questions" section.*/

export class ChangeLogObj {
  constructor(changes, version, author = null) {
    /**
     * @type {Array<String>}
     */
    this.changes = changes;
    /**
     * @type {Date}
     */
    let dateString = new Date().toString();
    dateString = new Date(dateString).toUTCString();
    dateString = dateString.split(" ").slice(0, 5).join(" ");
    this.date = dateString;
    this.version = version;
    this.author = author;
  }
}

export const ChangeLogObjLambda = (changes, version, author) => {
  let dateString = new Date().toString();
  dateString = new Date(dateString).toUTCString();
  dateString = dateString.split(" ").slice(0, 5).join(" ");
  return {
    changes: changes,
    date: dateString,
    version: version,
    author: author
  };
};

const changes = [
  "New visual identity by [@tylerfortune8](https://github.com/tylerfortune8)",
  "Version navigation.",
  "Links to latest released version in previous versions.",
  '"Why keep a changelog?" section.',
  '"Who needs a changelog?" section.',
  '"Frequently Asked Questions" section.'
];

export const changeLogObjExample = ChangeLogObjLambda(changes, "0.7.1", "eric");
