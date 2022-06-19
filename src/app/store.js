import { configureStore } from "@reduxjs/toolkit";
import entitiesReducer from "../features/entities/entitiesSlice";
import headerReducer from "../features/header/headerSlice";
import { loadState } from "./localStorage";
/*
export default configureStore({
  reducer: {
    entities: entitiesReducer
  }
});
*/

export const store = configureStore({
  reducer: {
    entities: entitiesReducer,
    header: headerReducer
  },
  preloadedState: loadState()
});
