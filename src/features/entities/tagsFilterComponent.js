import React from "react";

export const TagsFilterComponent = (props) => {
  const callback = props.callback;

  return (
    <div style={{ fontSize: "13px" }}>
      Filter tags:
      <input type="text" onInput={(e) => callback(e)} />
    </div>
  );
};
