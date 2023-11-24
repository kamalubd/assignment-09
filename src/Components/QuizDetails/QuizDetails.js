import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {

    const quizData = useLoaderData();

    const questionsData = quizData.data;
    // console.log(questionsData);
    const allQuestions = questionsData.questions;
    // console.log(allQuestions);


    return (
        <div>
            <h2>Quiz of {questionsData.name}</h2>
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