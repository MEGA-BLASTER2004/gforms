import { UPDATE_DESC, UPDATE_TITLE } from "../actions/types";
const TitleReducer = (
    state = { title: "Untitled Form", desc: "Form Description" },
    action
) => {
    switch (action.type) {
        case UPDATE_TITLE:
            return action.payload;
        case UPDATE_DESC:
            return action.payload;
        default:
            return state;
    }
};

export default TitleReducer;
