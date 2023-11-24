import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import './QuizTopics.css'

const QuizTopics = () => {
    
    const quizTopicsData = useLoaderData();
    const allTopics = quizTopicsData.data;

    
    return (
        <div className='topics-container'>
            {allTopics.map(topic =>  <QuizTopic 
            topic={topic}
            key = {topic.id}
            ></QuizTopic>)};
            
        </div>
    );
};

export default QuizTopics;