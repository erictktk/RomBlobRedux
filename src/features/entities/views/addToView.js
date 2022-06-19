import React from "react";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";

import { ViewSearch } from "./viewSearch";

import { addEntityToView, getAllViews } from "../entitiesSlice";

export const AddToView = (props) => {
  const [toggled, Toggle] = useState(false);

  const allViews = useSelector(getAllViews);

  const addToViewWrapper = (e) => {
    console.log("enter callback!");
    Toggle(false);

    props.addCallback(e);
  };

  const blurCallback = (e) => {
    Toggle(false);
  };

  if (!toggled) {
    return (
      <div
        style={{ cursor: "pointer", paddingTop: "2px" }}
        onClick={() => Toggle(true)}
      >
        Add To View
      </div>
    );
  } else {
    return (
      <ViewSearch
        blurCallback={blurCallback}
        inputCallback={addToViewWrapper}
        doAutoFocus={true}
      />
    );
  }
};
