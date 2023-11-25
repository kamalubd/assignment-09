import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import './QuizTopics.css'
import Header from '../Header/Header';

const QuizTopics = () => {
    
    const quizTopicsData = useLoaderData();
    const allTopics = quizTopicsData.data;

    
    return (
        <div>
            <Header></Header>
            <div>
                <p className='introtext'>Challenge Yourself With Our Quiz Test. We brings Dedicated MCQ quiz test in 4 different topic. Let's Test youself!!</p>
            </div>
        <div className='topics-container'>
        
            {allTopics.map(topic =>  <QuizTopic 
            topic={topic}
            key = {topic.id}
            ></QuizTopic>)};            
        </div>
        </div>
    );
};

export default QuizTopics;