import react from "react";
import "./header.css";
import { changeLogObjExample } from "./changeLogObj";
import { getChangeLog } from "./headerSlice";
import { useSelector } from "react-redux";

export const ChangeItem = (props) => {
  const theStr = "-" + props.change;
  return <div>{theStr}</div>;
};

export const ChangeLogObjViz = (props) => {
  const dateStr = props.changeLogObj.date;
  const version = props.changeLogObj.version;
  const changes = props.changeLogObj.changes;

  const changeItems = changes.map((change) => <ChangeItem change={change} />);

  return (
    <>
      <div className="change-top">
        <h2>{dateStr}</h2>
        <h4>{version}</h4>
      </div>
      <div className="changes">{changeItems}</div>
    </>
  );
};

export const ChangeLogViz = (props) => {
  /** @type{Array} */
  const changeLogObjs = useSelector(getChangeLog);

  const changesArr = [];
  for (let i = changeLogObjs.length - 1; i > -1; i -= 1) {
    let changeLogObj = changeLogObjs[i];
    console.log(changeLogObj);

    changesArr.push(<ChangeLogObjViz changeLogObj={changeLogObj} />);
  }

  return <>{changesArr}</>;
};
