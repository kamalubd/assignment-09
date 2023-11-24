import React from 'react';
import './Question.css'

const Question = ({questions}) => {
    console.log(questions);

    const {question, options} = questions;
    // console.log(options)
    return (
        <div>
            <div className="question-container">
            <p>{question}</p>
            <div>
                <p>{options[0]}</p>
                <p>{options[1]}</p>
                <p>{options[2]}</p>
                <p>{options[3]}</p>
            </div>
            </div>

            
        </div>
    );
};

export default Question;