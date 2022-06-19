import react from "react";
import "../../../styles.css";
import "../entityComponent.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

import { EntityComponent } from "../entityComponentViz";
import { ViewNav } from "./viewsNav";
import { ViewSearch } from "./viewSearch";
import { TagsFilterComponent } from "../tagsFilterComponent";

import { getAllEntities, getAllViews } from "../entitiesSlice";
import { addEntity } from "../entitiesSlice";

import { fakeEntityList } from "../hardcoded/entitiesExamples";
import { PassSimpleTagsStr } from "../tags/tagsUtils";
import { ViewComponent } from "../views/viewComponentViz";
import Entity from "../Entity";

const DEPTH_LIMIT = 1;

export const ViewViz = (props) => {
  const depth = props.depth ? props.depth : 0;
  let tagsString = props.tagsString;
  const view = props.view;
  /**@type {Array<Entity>} */
  const entities = useSelector(getAllEntities);
  const filteredEntities = entities.filter((e) =>
    view.entityIDs.includes(e.id)
  );

  console.log(filteredEntities);

  const allViews = useSelector(getAllViews);

  const dispatch = useDispatch();
  const entityComponents = [];

  const addNewEntity = (e) => {
    const payload = { id: nanoid() };
    dispatch(addEntity(payload));
  };

  for (let i = 0; i < filteredEntities.length; i += 1) {
    if (tagsString === "") {
      entityComponents.push(
        <EntityComponent
          entity={filteredEntities[i]}
          key={filteredEntities[i].id}
          inView={true}
          viewID={view.id}
        />
      );
    } else {
      if (PassSimpleTagsStr(tagsString, filteredEntities[i])) {
        entityComponents.push(
          <EntityComponent
            entity={filteredEntities[i]}
            key={filteredEntities[i].id}
            inView={true}
            viewID={view.id}
          />
        );
      }
    }
  }

  const [renderEntities, toggleRenderEntities] = useState(true);
  const toggleCallback = (e) => {
    if (depth > 0) {
      toggleRenderEntities(!renderEntities);
    }
  };

  const subViewComponents = [];
  if (depth <= 2) {
    if (view.views && view.views.length !== 0) {
      for (let i = 0; i < view.views.length; i += 1) {
        const id = view.views[i];
        const filtered = allViews.filter((v) => v.id === id);
        console.log(filtered);
        if (filtered.length !== 0) {
          subViewComponents.push(
            <ViewViz depth={depth + 1} view={filtered[0]} />
          );
        }
      }
    }
  }

  //console.log(entityComponents.length);

  return (
    <>
      <ViewComponent view={view} depth={depth} />
      <div className="entities-View">{entityComponents}</div>
      <div className="entities-View">{subViewComponents}</div>
      <div className="entity-Bottom-Row">
        <button
          onClick={(e) => {
            addNewEntity();
          }}
        >
          ok!
        </button>
      </div>
    </>
  );
};
