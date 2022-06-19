import react from "react";
import { jsonExampleOutput } from "./exampleJSONOutput";
import { store } from "../../app/store";

export function GetJSONOutput(store) {
  const header = store.getState().header;
  const entitiesList = store.getState().entities.entitiesList;

  const theDict = {
    header: header,
    entities: entitiesList
  };

  return theDict;
}

export const JSONOutputViz = () => {
  let theStr = JSON.stringify(jsonExampleOutput, null, 3);

  theStr = JSON.stringify(GetJSONOutput(store), null, 3);

  return (
    <>
      <h1>JSON Output</h1>
      <textarea
        rows={30}
        cols={100}
        value={theStr}
        defaultValue={theStr}
        readonly={true}
      ></textarea>
    </>
  );
};
