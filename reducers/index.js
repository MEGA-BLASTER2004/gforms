import React from "react";
import TitleReducer from "./TitleReducer";
import QuestionsReducer from "./QuestionsReducer";
import { combineReducers } from "redux";

export default combineReducers({
    test: () => "Hello",
    title: TitleReducer,
    questions: QuestionsReducer,
});
