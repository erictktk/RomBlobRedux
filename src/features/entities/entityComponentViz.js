import react from "react";

import { useDispatch } from "react-redux";
import {
  editEntity,
  removeEntity,
  removeEntityFromView,
  addEntityToView
} from "./entitiesSlice";
import { useState } from "react";
import { RemoveEntityModalDialogBox } from "./removeEntityModal";
import "./entityComponent.css";

import { AddToView } from "./views/addToView";

import { Entity } from "./entitiesSlice";
import * as utils from "./utils";

import { EntityField } from "./_components/entityField";
import { EntityLabel, EntityLabel2 } from "./_components/entityLabel";

export function EntityComponent(props) {
  /**@type{Entity} */
  const entity = props.entity; // @type: Entity
  const id = props.entity.id;
  const name = entity.name;
  const tags = entity.tags;
  const inView = props.inView;
  const viewID = props.viewID;

  const dispatch = useDispatch();
  const [viewMetaData, toggleMetaDataView] = useState(false);
  const [isRemoving, toggleRemoving] = useState(false);

  const cancelCallback = () => {
    toggleRemoving();
  };

  const onEditContents = (e, fieldName) => {
    const payload = [id, fieldName, e.target.value];
    dispatch(editEntity(payload));
  };

  const onRemoveEntity = (e) => {
    if (!inView) {
      const payload = { id: id };
      dispatch(removeEntity(payload));
    } else {
      console.log("hi!");
      const payload = { viewID: viewID, id: id };
      dispatch(removeEntityFromView(payload));
    }
    toggleRemoving(false);
  };

  /*
  const onRemoveEntityFromView (e) = >{

  }*/

  let tagsString = "";
  for (let i = 0; i < tags.length; i += 1) {
    if (i !== tags.length - 1) {
      tagsString += tags[i] + " ";
    } else {
      tagsString += tags[i];
    }
  }

  const addToViewCallback = (view) => {
    const viewID = view.id;
    console.log("before dispatch!");
    dispatch(addEntityToView([id, viewID]));
  };

  let removeButton = null;
  let removeEntityComponents = [];
  if (props.inView) {
    removeButton = <button onClick={toggleRemoving}>Remove From View</button>;
    removeEntityComponents.push(
      <RemoveEntityModalDialogBox
        entity={entity}
        confirmCallback={onRemoveEntity}
        cancelCallback={cancelCallback}
        inView={inView}
      />
    );
  } else {
    removeButton = <button onClick={toggleRemoving}>Remove</button>;
    removeEntityComponents.push(
      <RemoveEntityModalDialogBox
        entity={entity}
        confirmCallback={onRemoveEntity}
        cancelCallback={cancelCallback}
        inView={inView}
      />
    );
  }

  return (
    <>
      <div className="entity-Component-Container">
        <div className="entity-Component-Header">
          <div style={{ display: "flex" }}>
            <EntityLabel label={"Name :"} />
            <EntityField
              initValue={entity.name}
              callback={(e) => {
                onEditContents(e, "name");
              }}
            />
          </div>
          <div style={{ display: "flex" }}>
            {!inView && (
              <AddToView entity={entity} addCallback={addToViewCallback} />
            )}{" "}
            &nbsp; &nbsp; &nbsp;
            {removeButton}
          </div>
        </div>
        <div className="entity-Component-Body">
          <div className="entity-Component-Body-Inside">
            <div className="entity-Component-Info1">
              <EntityLabel label="Memory Address:" />
              <EntityField
                initValue={entity.memoryPosition}
                callback={(e) => {
                  onEditContents(e, "memoryPosition");
                }}
                somethingElseValue={utils.hexStringTo6(entity.memoryPosition)}
              />
              <EntityLabel label="Original Value: " />
              <EntityField
                initValue={entity.originalValue}
                callback={(e) => {
                  onEditContents(e, "originalValue");
                }}
              />
              <EntityLabel label="New Value: " />
              <EntityField
                initValue={entity.newValue}
                callback={(e) => {
                  onEditContents(e, "newValue");
                }}
              />
            </div>
            <br />
            {!inView && (
              <div className="entity-Component-Info2">
                <div className="entity-Component-InfoEntry">
                  <EntityLabel2 label={"Tags:"} />
                  <input
                    type="text"
                    //className="E"
                    onInput={(e) => onEditContents(e, "tags")}
                    defaultValue={tagsString}
                    style={{ width: "330px" }}
                  />
                </div>
                <div className="entity-Component-InfoEntry">
                  <EntityLabel2 label={"Description:"} />
                  <textarea cols={60} />
                </div>
                <div
                  className="entity-Component-DropdownLink"
                  onClick={() => toggleMetaDataView(!viewMetaData)}
                >
                  Metadata:
                </div>
                {viewMetaData && (
                  <>
                    <div className="entity-Component-InfoEntry">
                      <EntityLabel2 label={"Author:"} />
                      <div className="entity-Component-Field2">
                        {entity.author}
                      </div>
                    </div>
                    <div className="entity-Component-InfoEntry">
                      <EntityLabel2 label={"Date Added: "} />
                      <div className="entity-Component-Field2">
                        {entity.dateAdded.toString()}
                      </div>
                    </div>
                    <div className="entity-Component-InfoEntry">
                      <EntityLabel2 label={"Comments: "} />
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {isRemoving && (
        <RemoveEntityModalDialogBox
          entity={entity}
          confirmCallback={onRemoveEntity}
          cancelCallback={cancelCallback}
          inView={inView}
        />
      )}
    </>
  );
}
