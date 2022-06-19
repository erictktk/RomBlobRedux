import react from "react";
import { useState } from "react";

import { store } from "../../app/store";

import "./changes.css";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update state to force render
  // An function that increment 👆🏻 the previous state like here
  // is better than directly setting `value + 1`
}

export function SingleEntityChange(props) {
  const entity = props.entity;
  const id = entity.id;
  const name = entity.name;
  const originalValue = entity.originalValue;
  const newValue = entity.newValue;
  const curElementNum = props.curElementNum;

  const forceUpdate = useForceUpdate();

  let className = "view-entity-section";
  if (newValue) {
    if (newValue !== originalValue) {
      className += " changed-entity";
    } else {
      className += " unchanged-entity";
    }
  } else {
    className += " unchanged-entity";
  }

  console.log(className);

  return (
    <div className="view-entity-grid">
      <div className={className}>id: {id}</div>
      <div className={className}>{name}</div>
      <div className={className}>originalValue: {originalValue}</div>
      <div className={className}>newValue: {newValue}</div>
    </div>
  );
}

export function ChangeView(props) {
  const state = store.getState();

  const allEntities = state.entities.entitiesList;

  const entitiesChangedList = allEntities.filter(
    (e) => e.originalValue !== e.newValue && e.newValue !== null
  );
  //const seeAllEntities = true;

  const [seeAllEntities, ToggleSeeAll] = useState(false);

  const entityComponents = [];
  if (seeAllEntities) {
    for (let i = 0; i < allEntities.length; i += 1) {
      const entity = allEntities[i];
      entityComponents.push(
        <SingleEntityChange entity={entity} key={entity.id} curElementNum={i} />
      );
    }
  } else {
    for (let i = 0; i < entitiesChangedList.length; i += 1) {
      const entity = entitiesChangedList[i];
      entityComponents.push(
        <SingleEntityChange entity={entity} key={entity.id} curElementNum={i} />
      );
    }
  }

  let message = null;
  let descr = "(Viewing only changed entities)";
  let buttonLabel = "See All";
  if (!seeAllEntities && entitiesChangedList.length === 0) {
    message = "No entities changed!";
  } else if (seeAllEntities && allEntities.length === 0) {
    message = "The state's entity list has no entities!";
  }

  if (seeAllEntities) {
    descr = "(Viewing all entities)";
    buttonLabel = "See only changed";
  }

  //console.log(entitiesChangedList);

  return (
    <div className="page">
      <div style={{ display: "flex", verticalAlign: "middle" }}>
        <h1>Changes</h1> &nbsp; &nbsp; &nbsp;
        <h2>{descr}</h2>
      </div>
      {message && message}
      <button onClick={() => ToggleSeeAll(!seeAllEntities)}>
        {buttonLabel}
      </button>
      <div className="view-entity-changes">{entityComponents}</div>
    </div>
  );
}
