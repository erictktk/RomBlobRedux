import Entity from "./features/entities/Entity";
import {
  EntityViz,
  EntityVizAlone
} from "./features/entities/entityComponentViz";
import { EntitiesPage } from "./features/entities/entitiesPage";
import { HeaderViz } from "./features/header/headerViz";
import { ChangeView } from "./features/changes/newChangeView";
import { JSONOutputViz } from "./features/jsonOutput/jsonOutputViz";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./app/navbar";
import { debounce } from "debounce";
import { store } from "./app/store";
import { saveState } from "./app/localStorage";

store.subscribe(
  debounce(() => {
    saveState(store.getState());
    console.log("state saved!");
  }, 500)
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <EntitiesPage />
              </>
            )}
          />
          <Route path="/Header">
            <HeaderViz />
          </Route>
          <Route path="/Changes">
            <ChangeView />
          </Route>
          <Route path="/JSONOutput">
            <JSONOutputViz />
          </Route>
          <Route path="/Patcher">
            <h1>Not yet implemented</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
