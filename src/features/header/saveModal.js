import { useState } from "react";

import { useSelector } from "react-redux";
import { getChangeLog } from "./headerSlice";
import "../../modal.css";
import "../../styles.css";

export function SimpleLineChange2(props) {
  const i = props.i;
  const callback = props.callback;
}

export function SimpleLineChange(props) {
  const i = props.i;
  const callback = props.callback;

  return (
    <input
      type="text"
      onChange={(e) => {
        callback(e, i);
      }}
    />
  );
}

export const HeaderModal = (props) => {
  const confirmCallback = props.confirmCallback;
  const cancelCallback = props.cancelCallback;

  const changeLog = useSelector(getChangeLog);
  const lastChangeLogObj = changeLog[changeLog.length - 1];
  const lastVersion = lastChangeLogObj.version;

  const [changes, setChanges] = useState(["", ""]);
  const [newVersion, setVersion] = useState(lastVersion);

  const setVersionWrapper = (e) => {
    console.log(e.target.value);
    setVersion(e.target.value);
  };

  const addMoreChanges = () => {
    setChanges((changes) => [...changes, ""]);
  };

  const removeChange = () => {
    setChanges(changes.slice(0, changes.length - 1));
  };

  const saveCallbackWrapper = (e) => {
    let version = newVersion;

    console.log(version);

    confirmCallback(changes, version);
  };

  const setChangeWrapper = (e, i) => {
    //console.log(changes);
    let newChange = e.target.value;
    let newChanges = [...changes];
    newChanges[i] = newChange;
    setChanges(newChanges);
  };

  const simpleLineChanges = [];

  for (let i = 0; i < changes.length; i += 1) {
    console.log(changes.length);
    simpleLineChanges.push(
      <SimpleLineChange
        i={i}
        callback={(e, i) => {
          setChangeWrapper(e, i);
        }}
        defaultValue={changes[i]}
      />
    );
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Save Changes?</h2>
        <div className="save-changes-entry">Changes:</div>
        <div className="save-changes-vertical">{simpleLineChanges}</div>
        <div className="modal-horiziontal-right">
          <button onClick={addMoreChanges}>Add Change</button>
          <button onClick={removeChange}>Remove Change</button>
        </div>
        <div className="save-changes-horizontal">
          Version:
          <input
            type="text"
            defaultValue={lastVersion}
            onInput={(e) => {
              setVersionWrapper(e);
            }}
          />
        </div>
        <div className="save-changes-button-row">
          <button onClick={saveCallbackWrapper}>Save</button>
          <button onClick={cancelCallback}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
