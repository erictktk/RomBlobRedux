import { createSlice } from "@reduxjs/toolkit";

import { sub } from "date-fns";
import * as tagsUtils from "./tags/tagsUtils";

import { totalViewLambda, View } from "./views/model/views";
import Entity from "./Entity";
import { entityLambda } from "./Entity";

import { defaultViews } from "./views/model/defaultViews";
import { fakeEntityList } from "./hardcoded/entitiesExamples";
import { HeatManEntities } from "./hardcoded/newEntitiesExample";

/**
 *
 * @type {Array<View>} defaultViews
 * @param {*} entitiesList
 */
export function FillDefaultViews(defaultViews, entitiesList) {
  //const filledDefaultViews = [...defaultViews];
  for (let i = 0; i < defaultViews.length; i += 1) {
    /** @type{View} */
    const curView = defaultViews[i];

    const tagsToNeed = curView.tags;

    const IDsToInclude = [];
    //console.log(tagsToNeed);
    for (let j = 0; j < entitiesList.length; j += 1) {
      if (tagsUtils.PassSimpleTags(tagsToNeed, entitiesList[j])) {
        IDsToInclude.push(entitiesList[j].id);
      }
    }

    curView.entityIDs = IDsToInclude;
    console.log(curView);
    console.log(IDsToInclude);
  }
  return defaultViews;
}

const getInitialState = () => {
  const entity1 = fakeEntityList[0];
  const entity2 = fakeEntityList[1];
  const entitiesList = [entity1, entity2, ...HeatManEntities];
  /*
  const thisDefaultViews = FillDefaultViews(
    JSON.parse(JSON.stringify(defaultViews)),
    entitiesList
  );*/

  const thisDefaultViews = FillDefaultViews(defaultViews, entitiesList);

  return {
    /**@type Array<string> */
    tagsNecessary: [],
    /**@type Array<string> */
    tagsToExclude: [],
    /**@type Array<string> */
    categoriesNecessary: [],
    /**@type Array<string> */
    categoriesToExlcude: [],
    /**@type Array<Entity> */
    entitiesList: entitiesList,
    /**@type View */
    views: thisDefaultViews,
    numIDsAdded: entitiesList.length,
    numViewsAdded: thisDefaultViews.length
  };
};

//#region selectors
const getEntityByID = (state, id) => {
  return state.entitiesList.find((entity) => entity.id === id);
};
export const getAllEntities = (state) => state.entities.entitiesList;
export const getAllViews = (state) => state.entities.views;
//#endregion

const entitiesSlice = createSlice({
  name: "entities",
  initialState: getInitialState(),
  reducers: {
    addEntity: (state, action) => {
      const id = state.numIDsAdded;
      state.numIDsAdded += 1;
      const newEntity = entityLambda(id, "");

      state.entitiesList.push(newEntity);
    },
    removeEntity: (state, action) => {
      const { id } = action.payload;

      const existingEntity = state.entitiesList.find(
        (entity) => entity.id === id
      );

      if (existingEntity) {
        console.log("existingEntity!");
        state.entitiesList = state.entitiesList.filter(
          (item) => item !== existingEntity
        );
      }
    },
    editEntity: (state, action) => {
      const [id, fieldName, value] = action.payload;

      //console.log(action.payload);
      //console.log(state.entitiesList);

      const existingEntity = state.entitiesList.find(
        (entity) => entity.id === id
      );

      //console.log("before existing entity!");

      if (existingEntity) {
        //console.log("existing entity!!!");
        //console.log(existingEntity);
        const index = state.entitiesList.indexOf(existingEntity);
        existingEntity[fieldName] = value;
        state.entitiesList[index] = existingEntity; //don't think i need this;
      }
    },
    tagAdded: (state, action) => {
      const { id, newOffset } = action.payload;
    },
    tagRemoved: (state, action) => {
      if (!state.tags.indexOf(action.payload) !== -1) {
        state.tags = state.tags.filter((element) => element !== action.payload);
      }
    },

    //#region Views
    addView: (state, action) => {
      const params = action.payload;
      const IDparams = { id: state.numViewsAdded, ...params };
      state.numViewsAdded += 1;
      state.views.push(totalViewLambda(IDparams));
    },

    setSubViewOnly: (state, action) => {
      const [id, value] = action.payload;
    },

    editView: (state, action) => {

      const something = 10;
    },

    addEntityToView: (state, action) => {
      const [id, viewID] = action.payload;

      console.log("hi!!");

      const filtered = state.views.filter((view) => view.id === viewID);

      if (filtered.length !== 0) {
        const view = filtered[0];

        view.entityIDs.push(id);
      }
    },

    removeEntityFromView: (state, action) => {
      const { id, viewID } = action.payload;

      const fViews = state.views.filter((view) => view.id === viewID);
      console.log(fViews);
      //console.log(fViews);
      if (fViews.length !== 0) {
        /**@type{Array<View>} */
        const view = fViews[0];

        const newViewIDs = view.entityIDs.filter((num) => num !== id);
        view.entityIDs = newViewIDs;

        const indexOf = state.views.indexOf(view);

        state.views[indexOf] = JSON.parse(JSON.stringify(view));
      }
    }
  }
});

export const {
  addEntity,
  removeEntity,
  editEntity,
  removeEntityFromView,
  addEntityToView,
  addView,
  editView,
  setSubViewOnly,
} = entitiesSlice.actions;

export default entitiesSlice.reducer;
