
import React from 'react';
import './QuizTopic.css'
import { Link } from 'react-router-dom';

const QuizTopic = ({topic, btnClick}) =>
{
    // console.log(topic);

    const {name, logo, total,id} = topic;


    return (
        <div className='topic-container'>
            <div className='topic-img'>
                <img src={logo} alt=""/>
            </div>
            <div className='features'>
              <p><small>Topic: {name}</small></p>
              <p><small>Total Quiz: {total} </small></p>
                
            </div>
            <div>
            <button onClick={() => btnClick(topic.id)}><Link to={`/quiz/${id}`}>Practise Now</Link></button>
            </div>
            
        </div>
    );
};

export default QuizTopic;