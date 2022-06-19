import ADD_QUESTION from "../actions/types";

const QuestionsReducer = (
    state = [{ text: "Question Text", options: ["Option A"] }],
    action
) => {
    switch (action.type) {
        case "ADD_QUESTION":
            return [...state, action.payload];
        case "UPDATE_QUESTION":
            return state.map((question, index) => {
                if (index == action.index) {
                    return { ...question, text: action.payload.text };
                } else {
                    return question;
                }
            });

        case "UPDATE_OPTIONS":
            return state.map((question, index) => {
                if (index == action.questionIndex) {
                    const newOpts = question.options.map((option, ind) => {
                        if (ind == action.optionIndex) {
                            return action.payload;
                        } else {
                            return option;
                        }
                    });
                    return { ...question, options: newOpts };
                } else {
                    return question;
                }
            });
        default:
            return state;
    }
};

export default QuestionsReducer;
