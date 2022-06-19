import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Circle, Plus } from "tabler-icons-react";
import { addQuestion, updateOptions, updateQuestion } from "../actions";

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

function Question({ text, options, index }) {
    const dispatch = useDispatch();
    const question = useSelector((state) => state.questions);
    return (
        <div className="mt-4 group w-[60%] duration-100 mx-auto flex">
            <div className="group-focus-within:shadow-xl flex flex-col space-x-4 space-y-2 flex-grow px-6 duration-100 py-8 w-[60%] border-l-[10px] border-transparent group-focus-within:border-blue-400 mx-auto bg-white rounded-xl">
                <input
                    type="text"
                    className="outline-none text-lg w-fit duration-100 group-focus-within:bg-gray-200 group-focus-within:text-gray-700 p-3 focus:border-gray-500 border-b border-b-transparent"
                    value={text}
                    onChange={(e) => {
                        dispatch(
                            updateQuestion({
                                index: index,
                                text: e.target.value,
                            })
                        );
                    }}
                />
                {options.map((option, opt) => {
                    return (
                        <OptionsMapping
                            text={option}
                            optionIndex={opt}
                            questionIndex={index}
                            dispatch={dispatch}
                        />
                    );
                })}
            </div>
            <div className="bg-white flex-col duration-100 shadow-xl hidden group-focus-within:flex p-2 ml-2 rounded-xl">
                <button
                    className="duration-100"
                    onClick={() =>
                        dispatch(
                            addQuestion({
                                text: `Question Text`,
                                options: ["Option A"],
                            })
                        )
                    }
                >
                    <div className="p-1 hover:bg-gray-200 rounded-lg">
                        <Plus className=" duration-100 w-5 h-5" />
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Question;
