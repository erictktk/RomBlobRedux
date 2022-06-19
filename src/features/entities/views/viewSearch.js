import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getAllViews } from "../entitiesSlice";
import { View } from "./model/views";
import "./view.css";
import { ViewsNav } from "./viewsNav";

export const ViewSearch = (props) => {
  const inputCallback = props.inputCallback;
  const changeCallback = props.changeCallback;
  const blurCallback = props.blurCallback;
  //const entityID

  const [search, setSearch] = useState("");
  const [seeDropDown, setSeeDropDown] = useState(false);

  /** @type{Array<View>} */
  const allViews = useSelector(getAllViews);
  const allViewNames = allViews.map((v) => v.name);
  //console.log(allViews);

  const handleInput = (e) => {
    if (e.key === "Enter") {
      changeCallback(e.target.value);
    }
  };

  const makeDropdownCallback = (dropdownView) => {};

  const dropdownElements = [];
  if (search === "") {
    for (let i = 0; i < allViews.length; i += 1) {
      console.log("hi!");
      dropdownElements.push(
        <a
          href="#"
          onMouseDown={(e) => {
            inputCallback(allViews[i]);
          }}
        >
          {allViews[i].name}
        </a>
      );
    }
  } else {
    const actualAllViews = allViews.filter(
      (v) => v.name.slice(0, search.length) === search
    );
    for (let i = 0; i < actualAllViews.length; i += 1) {
      dropdownElements.push(
        <a href="#" onClick={(e) => {}}>
          {actualAllViews[i].name}
        </a>
      );
    }
  }

  const actualBlurCallback = () => {
    setSeeDropDown(false);
    if (blurCallback) {
      blurCallback();
    }
  };

  //console.log(dropdownElements);

  return (
    <div className="dropdown">
      <input
        autoFocus={props.doAutoFocus}
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onFocus={() => setSeeDropDown(true)}
        onClick={() => setSeeDropDown(true)}
        onBlur={() => actualBlurCallback()}
      />
      {seeDropDown && (
        <div className="dropdown-content">{dropdownElements}</div>
      )}
    </div>
  );
};
