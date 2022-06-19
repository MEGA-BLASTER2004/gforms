import Head from "next/head";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../actions";
import Header from "../components/Header";
import Question from "../components/Question";

const Home = () => {
    const questions = useSelector((state) => state.questions);
    const dispatch = useDispatch();
    return (
        <div className="h-screen w-screen pt-4 bg-purple-100">
            <Header />
            {questions.map((question, index) => {
                return (
                    <Question
                        text={question.text}
                        index={index}
                        options={question.options}
                    />
                );
            })}
        </div>
    );
};

export default Home;
