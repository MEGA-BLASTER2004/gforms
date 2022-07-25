import React from "react";
import { Circle } from "tabler-icons-react";
import { updateOptions } from "../actions";
const OptionsMapping = ({ text, questionIndex, optionIndex, dispatch }) => {
    return (
        <div className="flex space-x-2 items-center">
            <Circle />
            <input
                type="text"
                className="outline-none text-sm w-fit p-2 focus:border-gray-500 border-b border-transparent"
                value={text}
                onChange={(e) => {
                    dispatch(
                        updateOptions({
                            text: e.target.value,
                            questionIndex,
                            optionIndex,
                        })
                    );
                }}
            />
        </div>
    );
};

export default OptionsMapping;
