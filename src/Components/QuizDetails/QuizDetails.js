import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {

    const quizData = useLoaderData();

    const questionsData = quizData.data;
    const allQuestions = questionsData.questions;


    return (
        <div>
            {
                allQuestions.map(questions => <Question 
                    questions ={questions}
                    key = {questions.id}
                    ></Question>)
            }
        </div>
    );
};

export default QuizDetails;