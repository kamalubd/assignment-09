import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {

    const quizData = useLoaderData();

    const questionsData = quizData.data;
    const questions = questionsData.questions;
    console.log(questions)

    return (
        <div>
            
        </div>
    );
};

export default QuizDetails;