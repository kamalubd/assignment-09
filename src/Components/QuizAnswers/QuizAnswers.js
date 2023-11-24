import React from 'react';
import Answer from '../Answer/Answer';

const QuizAnswers = (props) => {

    const options = props.options;

    // console.log(options)
    
        
    
    return (
        <div>

            {options.map (option => <Answer option = {option}></Answer>)}
           
        </div>
    );
};

export default QuizAnswers;