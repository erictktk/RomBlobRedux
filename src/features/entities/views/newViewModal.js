import React from "react";

//
//import { Entity } from "./entitiesSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

import "../../../modal.css";

export function CreateViewModalDialog(props) {
  const confirmCallback = props.confirmCallback;
  const cancelCallback = props.cancelCallback;

  const [params, setParams] = useState({
    name: "",
    description: ""
  });

  const setParamsWrapper = (name, e) => {
    const newDict = { name: e.target.value };
    setParams(Object.assign(params, newDict));
    //console.log(name);
    //console.log(e.target.value);
  };

  /*
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create View from (Filtered) Entities?</h2>
        <div className="modal-horizontal-line">
          <div>Name:&nbsp;&nbsp;</div>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setParamsWrapper("name", e);
              }}
            />
          </div>
        </div>
        <div className="modal-horizontal-line">
          <div>Description:&nbsp;&nbsp;</div>
          <div style={{ display: "flex", justifyContent: "start" }}>
            <textarea
              type="text"
              onChange={(e) => {
                setParamsWrapper("description", e);
              }}
            />
          </div>
        </div>

        <div className="modal-horizontal-line">
          <button onClick={confirmCallback}>Confirm</button>
          <button onClick={cancelCallback}>Cancel</button>
        </div>
      </div>
    </div>
  );*/

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create New View from (Filtered) Entities?</h2>
        <div className="modal-even-grid">
          <div className="modal-grid-left">
            <div>Name:</div>
          </div>
          <div className="modal-grid-right">
            <div>
              <input
                type="text"
                onChange={(e) => {
                  setParamsWrapper("name", e);
                }}
              />
            </div>
          </div>
          <div className="modal-grid-left">
            <div>Description: </div>
          </div>
          <div className="modal-grid-right">
            <div style={{ display: "flex", justifyContent: "start" }}>
              <textarea
                type="text"
                onChange={(e) => {
                  setParamsWrapper("description", e);
                }}
              />
            </div>
          </div>
        </div>

        <div className="modal-horizontal-line">
          <button onClick={confirmCallback}>Confirm</button>
          <button onClick={cancelCallback}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
