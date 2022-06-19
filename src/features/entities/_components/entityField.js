import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

import "../entityComponent.css";

export const EntityField = (props) => {
  const [isChanging, toggleChange] = useState(false);

  const initValue = props.initValue;
  const callback = props.callback;

  const onChangeCallback = (e) => {
    if (e.key === "Enter") {
      toggleChange(false);
      callback(e);
    } else if (e.key === "Escape") {
      toggleChange(false);
    }
  };

  if (isChanging) {
    if (!props.isDescription) {
      return (
        <input
          type="text"
          defaultValue={initValue}
          onKeyDown={(e) => onChangeCallback(e)}
        />
      );
    } else {
      return (
        <textarea
          defaultValue={initValue}
          onKeyDown={(e) => onChangeCallback(e)}
        />
      );
    }
  } else {
    return (
      <>
        <div
          className={"entity-Component-Label"}
          style={{ fontWeight: 400, paddingRight: "0px" }}
        >
          {props.initValue}
        </div>
        <div
          className={"entity-Component-Label"}
          style={{ paddingLeft: "0px", cursor: "pointer" }}
          onClick={() => {
            toggleChange(true);
          }}
        >
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faPencil} fontSize={11} />
        </div>
      </>
    );
  }
};

export function entityFieldOld(props) {
  const initValue = props.initValue;
  const callback = props.callback;

  return (
    <input
      className="entity-Component-Field"
      type="text"
      onChange={(e) => callback(e)}
    />
  );
}
