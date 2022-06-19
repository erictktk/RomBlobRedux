import react from "react";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RemoveEntityModalDialogBox } from "../removeEntityModal";
import "../entityComponent.css";
import "./view.css";

import { Entity } from "../entitiesSlice";
import { getAllViews, editView, setSubViewOnly } from "../entitiesSlice";

import { View } from "./model/views";

export function ViewLabel(props) {
  //console.log(props);
  const label = props.label;
  return <div className="entity-Component-Label">{label}</div>;
}

export function ViewImage(props) {
  /** @type {View} */
  const view = props.view;

  if (view.imageURL) {
    return (
      <>
        <div className="view-Image">
          <img src={view.imageURL} alt="Heat Man" />
        </div>
      </>
    );
  } else {
    return <div className="view-Image"></div>;
  }
}

export function ViewComponent(props) {
  //@type {entity}
  const view = props.view; // @type: Entity
  const id = view.id;
  const desc = view.description;
  const isFirstOrder = props.isFirstOrder;
  const depth = props.depth ? props.depth : 0;

  const allViews = useSelector(getAllViews);

  const dispatch = useDispatch();
  //const [viewMetaData, toggleMetaDataView] = useState(false);
  const [isRemoving, toggleRemoving] = useState(false);

  const cancelCallback = () => {
    toggleRemoving();
  };

  const onEditContents = (e, fieldName) => {
    const payload = [id, fieldName, e.target.value];
    dispatch(editView(payload));
  };

  const onToggleSubViewOnly = (e) => {
    const payload = [id, [id, e.target.value]];
    dispatch(setSubViewOnly(payload));
  };

  let subViewsStr = "None";

  if (view.views && view.views.length !== 0) {
    subViewsStr = "";
    for (let i = 0; i < view.views.length; i += 1) {
      const id = view.views[i];
      const filtered = allViews.filter((v) => v.id === id);

      if (filtered.length === 0) {
        subViewsStr += `view (id=${id}) not found`;
      } else {
        subViewsStr += filtered[0].name;
      }
      if (i !== view.views.length - 1) {
        subViewsStr += ", ";
      }
    }
  }

  let className = "view-Component-Header";
  if (depth > 0) {
    className = "subView-Component-Header-" + depth.toString();
  }

  let viewTitle = null;
  if (depth > 0) {
    viewTitle = <h5>View: {view.name}</h5>;
  } else {
    viewTitle = <h3>View: {view.name}</h3>;
  }

  return (
    <>
      <div className="view-Component-Container">
        <div className={className}>
          <div>{viewTitle}</div>
          <div className="vCH-Options">
            View Options:
            <div className="vCH-Options-Label">isSubViewOnly</div>
            <input type="checkbox" onChange={(e) => onToggleSubViewOnly(e)} />
          </div>
        </div>
        <div className="view-Component-Body">
          <div className="view-Component-Left">
            <div className="entity-Component-Label">Image:</div>
            <ViewImage view={view} />
          </div>
          <div className="view-Component-Right">
            <div className="entity-Component-Label">Description:</div>
            <textarea
              style={{ width: "90%" }}
              onInput={(e) => onEditContents(e, "description")}
              value={view.description}
            />
            <div className="entity-Component-Label2">Sub-views:</div>
            <div>{subViewsStr}</div>
          </div>
        </div>
      </div>
    </>
  );
}
