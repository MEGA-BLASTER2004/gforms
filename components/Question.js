import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Circle, Plus, Typography } from "tabler-icons-react";
import { addQuestion, updateOptions, updateQuestion } from "../actions";
import { Select } from "@mantine/core";
import OptionsMapping from "../components/OptionsMapping";

function Question({ text, options, index, type }) {
    const dispatch = useDispatch();
    const question = useSelector((state) => state.questions);
    return (
        <div className="mt-4 relative group w-[60%] duration-100 mx-auto flex">
            <div className="group-focus-within:shadow-xl flex flex-col space-x-4 space-y-2 flex-grow px-6 duration-100 py-8 w-[60%] border-l-[10px] border-transparent group-focus-within:border-blue-400 mx-auto bg-white rounded-xl">
                <div className="flex items-center space-x-10 w-full">
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
                    <Select
                        className="w-fit p-3"
                        size="md"
                        value={type}
                        data={[
                            {
                                value: "multi",
                                label: "Multiple Correct",
                                image: <Circle />,
                            },
                            {
                                value: "single",
                                label: "Single Correct",
                                image: <Circle />,
                            },
                            {
                                value: "text",
                                label: "Text Answer",
                                image: <Typography />,
                            },
                        ]}
                    />
                </div>
                {type == "single" || type == "multi" ? (
                    options.map((option, opt) => {
                        return (
                            <OptionsMapping
                                text={option}
                                optionIndex={opt}
                                questionIndex={index}
                                dispatch={dispatch}
                            />
                        );
                    })
                ) : (
                    <Circle />
                )}
            </div>
            <div className="bg-white flex-col duration-100 shadow-xl hidden group-focus-within:flex p-2 ml-2 rounded-xl">
                <button
                    className="duration-100"
                    onClick={() =>
                        dispatch(
                            addQuestion({
                                text: `Question Text`,
                                options: ["Option A"],
                                type: "single",
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
