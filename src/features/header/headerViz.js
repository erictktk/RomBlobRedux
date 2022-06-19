import react from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HeaderModal } from "./saveModal";
import {
  selectAllComments,
  dateChanged,
  dateCreated,
  ChangeLogObj,
  CommentObj,
  getTitle,
  getDescription,
  getLastChangeObj,
  getChangeLog,
  onSave
} from "./headerSlice";

import { ChangeLogViz } from "./changeLogComponents";
import { CommentsComponent } from "./commentsComponent";

import "../../styles.css";
import "./header.css";
import "../../modal.css";

//Title
//original Author
//start date
//

export const HeaderLabel = (props) => {
  return <div className="header-label">{props.label}</div>;
};

export const Comment = (props) => {};

export const Changelog = (props) => {};

export const HeaderViz = () => {
  //const dispatch = useDispatch();

  const [isSaving, toggleSaving] = useState(false);

  const dispatch = useDispatch();

  const onSaveChange = (changes, version) => {
    const payload = {};
    payload.changes = changes;
    payload.version = version;
    dispatch(onSave(payload));
    toggleSaving(false);
  };

  const onCancelChange = (e) => {
    toggleSaving();
  };

  let dateChangedStr = useSelector(dateChanged);
  if (!dateChangedStr && dateChangedStr !== "") {
    dateChangedStr = "not yet changed!";
  }

  const dateCreatedStr =
    useSelector(dateCreated) !== null
      ? useSelector(dateCreated).toString()
      : "undefined";

  const title = useSelector(getTitle);
  //const title = "nothin";
  const description = useSelector(getDescription);

  return (
    <>
      <div className="page">
        {isSaving && (
          <HeaderModal
            confirmCallback={onSaveChange}
            cancelCallback={onCancelChange}
          />
        )}

        <h1>Header</h1>
        <button onClick={toggleSaving}>Save to Changelog</button>

        <div className="header-entry">
          <div className="header-label">
            <h2>Title:</h2>
          </div>
          <input type="text" defaultValue={title} />
        </div>

        <div class="header-entry">
          <div className="header-label">
            <h3>Description:</h3>
          </div>
          <input type="text" defaultValue={description} />
        </div>

        <div className="header-entry">
          <div className="header-label">
            <h4>Date Changed:</h4>
          </div>
          <div className="header-field-container">
            <div>{dateChangedStr}</div>
          </div>
        </div>

        <div className="header-entry">
          <div className="header-label">
            <h4>Date Created:</h4>
          </div>
          <div className="header-field-container">
            <div>{dateCreatedStr}</div>
          </div>
        </div>

        <div className="header-entry2">
          <h4>Comments:</h4>
        </div>
        <CommentsComponent />

        <div className="header-entry2">
          <h4>Changelog:</h4>
        </div>
        <ChangeLogViz />
      </div>
    </>
  );
};
