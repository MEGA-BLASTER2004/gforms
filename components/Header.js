import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDesc, updateTitle } from "../actions/index";

function Header() {
    const title = useSelector((state) => state.title.title);
    const desc = useSelector((state) => state.title.desc);
    const dispatch = useDispatch();
    return (
        <div className="px-8 py-8 w-[60%] border-t-[18px] mx-auto bg-white border-purple-600 rounded-xl">
            <input
                className="text-3xl w-full outline-none focus:border-gray-500 border-transparent p-2 border-b"
                value={title}
                onChange={(e) => {
                    dispatch(updateTitle({ title: e.target.value, desc }));
                }}
            />
            <input
                className="text-base text-gray-500 w-full outline-none focus:border-gray-500 border-transparent p-2 border-b"
                value={desc}
                onChange={(e) => {
                    dispatch(updateDesc({ desc: e.target.value, title }));
                }}
            />
        </div>
    );
}

export default Header;
