import { createSlice } from "@reduxjs/toolkit";

const getIdFromStore = () => {
  return 0;
};

const getInitialState = () => {
  return {
    id: getIdFromStore(),
    name: "unnamed entity",
    tags: [],
    categories: [],

    memoryType: 0,
    position: 0,
    offset: 0,

    initValue: -1,
    newValue: -1
  };
};

export const entitySlice = createSlice({
  name: "entity",
  initialState: getInitialState(),
  reducers: {
    tagAdded: (state, action) => {
      if (!state.tags.includesaction.payload()) {
        state.tags.push(action.payload);
      }
    },
    tagRemoved: (state, action) => {
      if (!state.tags.indexOf(action.payload) !== -1) {
        state.tags = state.tags.filter((element) => element !== action.payload);
      }
    },

    setMemoryType: (state, action) => {
      state.memoryType = action.payload;
    },

    setMemoryOffset: (state, action) => {
      state.memoryOffset = action.payload;
    },

    setMemoryPosition: (state, action) => {
      state.memoryPosition = action.payload;
    },

    setName: (state, action) => {
      state.name = action.payload;
    }
  }
});

export const {
  tagAdded,
  tagRemoved,
  setMemoryType,
  setMemoryOffset,
  setMemoryPosition
} = entitySlice.actions;

export const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    value: []
  },
  reducers: {
    add: (state, action) => {
      if (!state.value.includesaction.payload()) {
        state.value.push(action.payload);
      }
    },
    remove: (state, action) => {
      if (!state.value.indexOf(action.payload) !== -1) {
        state.value = state.value.filter(
          (element) => element !== action.payload
        );
      }
    }
  }
});

export const { add, remove } = tagsSlice.actions;
