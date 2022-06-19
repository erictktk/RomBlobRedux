import react from "react";
import { useState } from "react";

import { store } from "../../app/store";

import "./changes.css";

export function SingleEntityChange(props) {
  const entity = props.entity;
  const id = entity.id;
  const name = entity.name;
  const originalValue = entity.originalValue;
  const newValue = entity.newValue;
  const curElementNum = props.curElementNum;

  let className = "view-entity-section";
  if (newValue) {
    if (newValue !== originalValue) {
      className += " changed-entity";
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

export function ChangeViewOld(props) {
  console.log("change view!");
  const state = store.getState();
  console.log(state);
  //

  const allEntities = state.entities.entitiesList;

  const entitiesChangedList = allEntities.filter(
    (e) => e.originalValue !== e.newValue
  );
  //const seeAllEntities = true;

  const [seeAllEntities, ToggleSeeAll] = useState(false);

  const entityComponents = [];
  if (seeAllEntities && entitiesChangedList.length === 0) {
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

  //console.log(entitiesChangedList);

  if (entitiesChangedList.length === 0 && !seeAllEntities) {
    <div className="page">
      <h1>There are no entities changed!</h1>
    </div>;
  } else {
    return (
      <div className="page">
        <h1>Changes</h1>
        <div className="view-entity-changes">{entityComponents}</div>
      </div>
    );
  }
}
