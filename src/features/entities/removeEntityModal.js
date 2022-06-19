import react from "react";
import { Entity } from "./entitiesSlice";
import { useDispatch } from "react-redux";
import { editEntity, removeEntity } from "./entitiesSlice";
import { useState } from "react";

import "./entityComponent.css";

export function RemoveEntityModalDialogBox(props) {
  const entity = props.entity;
  const id = entity.id;
  const name = entity.name;

  const confirmCallback = props.confirmCallback;
  const cancelCallback = props.cancelCallback;

  if (!props.inView) {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Remove Entity:</h2>
          <h3>
            {name} ({id})?
          </h3>
          <div className="modal-horizontal-line">
            <button onClick={confirmCallback}>Confirm</button>
            <button onClick={cancelCallback}>Cancel</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Remove Entity From View:</h2>
          <h3>
            {name} ({id})?
          </h3>
          <div className="modal-horizontal-line">
            <button onClick={confirmCallback}>Confirm</button>
            <button onClick={cancelCallback}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
