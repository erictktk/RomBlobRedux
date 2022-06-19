import react from "react";
import "../../styles.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

import { EntityComponent } from "./entityComponentViz";
import { ViewSearch } from "./views/viewSearch";
import { TagsFilterComponent } from "./tagsFilterComponent";

import { getAllEntities } from "./entitiesSlice";
import { addEntity } from "./entitiesSlice";

import { fakeEntityList } from "./hardcoded/entitiesExamples";
import * as TagsUtils from "./tags/tagsUtils";

export const AllEntitiesView = (props) => {
  let entities = useSelector(getAllEntities);

  const [tagsString, setTagsString] = useState("");
  const filterCallback = (e) => {
    setTagsString(e.target.value);
  };

  const dispatch = useDispatch();
  const entityComponents = [];

  const addNewEntity = (e) => {
    const payload = { id: nanoid() };
    dispatch(addEntity(payload));
  };

  for (let i = 0; i < entities.length; i += 1) {
    if (tagsString === "") {
      entityComponents.push(
        <EntityComponent
          entity={entities[i]}
          key={entities[i].id}
          isEven={i % 2 === 0}
        />
      );
    } else {
      //console.log(entities[i].tags);
      if (TagsUtils.PassSimpleTagsStr(tagsString, entities[i])) {
        entityComponents.push(
          <EntityComponent
            entity={entities[i]}
            key={entities[i].id}
            isEven={i % 2 === 0}
          />
        );
      }
    }
  }

  if (props.hideTitle) {
    return (
      <>
        {entityComponents}
        <div className="entity-Bottom-Row">
          <button
            onClick={(e) => {
              addNewEntity();
            }}
          >
            Add New
          </button>
        </div>
      </>
    );
  } else {
    return (
      <div className="page">
        <h2>All Entities View</h2>
        <TagsFilterComponent callback={filterCallback} />
        {entityComponents}
        <div className="entity-Bottom-Row">
          <button
            onClick={(e) => {
              addNewEntity();
            }}
          >
            Add New
          </button>
        </div>
      </div>
    );
  }
};
