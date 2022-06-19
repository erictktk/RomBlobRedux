import { createSlice } from "@reduxjs/toolkit";
//import Entity from "./Entity";
import { sub } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { ChangeLogObj, changeLogObjExample } from "./changeLogObj";

import { getDefaultMiddleware } from "@reduxjs/toolkit";
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
});

//import

export const Comment = (comment, author) => {
  return {
    comment: comment,
    author: author,
    date: new Date().toString(),
    id: uuidv4()
  };
};

/*
export class Comment {
  constructor(comment, author) {
    this.comment = comment;
    this.author = author;
    this.date = new Date().toString();
    this.id = uuidv4();
  }
}*/

export const dateChanged = (state) => state.header.DateChanged;
export const dateCreated = (state) => state.header.DateCreated;
export const selectAllComments = (state) => state.header.Comments;
export const getTitle = (state) => state.header.Title;
export const getDescription = (state) => state.header.Description;

export const getLastChangeObj = (state) =>
  state.header.Changelog[state.header.Changelog.length - 1];

export const getChangeLog = (state) => state.header.Changelog;

//const testChangeLog = changeExampl

const initialState = {
  //{ id: '1', title: 'First Post!', content: 'Hello!' },
  //{ id: '2', title: 'Second Post', content: 'More text' }
  Title: "Megaman 2 ROM Map",
  Description: "Add Description...",

  Comments: [
    Comment("first comment lul", "eric"),
    Comment("second lul", "greg")
  ],
  Changelog: [changeLogObjExample],
  DateCreated: new Date().toString(),
  DateChanged: null,
  TimesSaved: 0
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    onSave(state, action) {
      state.TimesSaved += 1;

      const curDate = new Date();

      state.DateChanged = curDate.toString();

      if (state.TimesSaved === 1) {
        state.DateCreated = curDate;
      }

      const payload = action.payload;

      const changes = payload.changes;
      const changeVersion = payload.version;

      //
      //const curAuthor = state.curAuthor;

      const change = new ChangeLogObj(changes, changeVersion);
      state.Changelog.push(change);
    },
    onAddComment(state, action) {
      const payload = action.payload;
    },
    onEditComment(state, action) {
      const payload = action.payload;
    }
  }
});

export const { onSave, onAddComment, onEditComment } = headerSlice.actions;

export default headerSlice.reducer;
