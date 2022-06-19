import {
    ADD_QUESTION,
    UPDATE_DESC,
    UPDATE_OPTIONS,
    UPDATE_QUESTION,
    UPDATE_TITLE,
} from "./types";

export const updateTitle = (data) => {
    return { type: UPDATE_TITLE, payload: data };
};

export const updateDesc = (data) => {
    return { type: UPDATE_DESC, payload: data };
};

export const addQuestion = (data) => {
    return { type: ADD_QUESTION, payload: data };
};

export const updateQuestion = (data) => {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_QUESTION,
            payload: data.text,
            index: data.index,
        });
    };
};

export const updateOptions = (data) => {
    return {
        type: UPDATE_OPTIONS,
        payload: data.text,
        questionIndex: data.questionIndex,
        optionIndex: data.optionIndex,
    };
};
