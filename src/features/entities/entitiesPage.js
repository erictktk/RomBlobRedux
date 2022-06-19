import react from "react";
import "../../styles.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllViews } from "./entitiesSlice";
import { addView } from "./entitiesSlice";

import { TagsFilterComponent } from "./tagsFilterComponent";
import { ViewViz } from "./views/viewViz";
import { ViewsNav } from "./views/viewsNav";
import { CreateViewModalDialog } from "./views/newViewModal";
import { AllEntitiesView } from "./allEntitiesViz";

export function EntitiesPage(props) {
  const allViews = useSelector(getAllViews);

  //const callback

  const [viewNum, setViewNum] = useState(0);
  const [title, setTitle] = useState("All Entities View");
  const [tagsString, setTagsString] = useState("");
  const [seeAddViewModal, ToggleAddViewModal] = useState(false);

  const filterCallback = (e) => {
    setTagsString(e.target.value);
  };

  const viewComponents = [<AllEntitiesView hideTitle={true} />];
  for (let i = 0; i < allViews.length; i += 1) {
    viewComponents.push(<ViewViz tagsString={tagsString} view={allViews[i]} />);
  }

  const clickCallback = (i) => {
    if (i === 0) {
      setViewNum(0);
      setTitle("All Entities View");
    } else {
      setViewNum(i);
      setTitle(allViews[i - 1].name);
    }
  };

  const navTabs = [
    <ViewsNav
      name={"All Entities"}
      actualNum={0}
      clickCallback={clickCallback}
    />
  ];
  for (let i = 0; i < allViews.length; i += 1) {
    const view = allViews[i];
    navTabs.push(
      <ViewsNav
        name={view.name}
        actualNum={i + 1}
        clickCallback={clickCallback}
      />
    );
  }

  const dispatch = useDispatch();

  const addViewCallback = (params) => {
    const payload = params;
    dispatch(addView(payload));
    ToggleAddViewModal(false);
  };

  const addViewCancelCallback = () => {
    ToggleAddViewModal(false);
  };

  //const allViewsComponent =

  //const allViewsComponent =

  return (
    <div className="page">
      <h1>{title}</h1>
      <TagsFilterComponent callback={filterCallback} />
      <br />
      <nav>
        <div className="navContents" style={{ marginLeft: "30px" }}>
          {navTabs}
        </div>
        &nbsp; &nbsp; All Views:
        <input type="dropdown" />
        &nbsp; &nbsp; All Views:
        <input type="dropdown" />
        <div>
          &nbsp; &nbsp;
          <button onClick={() => ToggleAddViewModal(true)}>Add View</button>
        </div>
        Hi! Hi!
      </nav>

      <>{viewComponents[viewNum]}</>

      {seeAddViewModal && (
        <CreateViewModalDialog
          callback={addViewCallback}
          cancelCallback={addViewCancelCallback}
        />
      )}
    </div>
  );
}
