import React from 'react';
import './Question.css'

const Question = ({questions}) => {
    const {question, options,correctAnswer} = questions;

    console.log(correctAnswer);

    const valueByClick = (e) => {
        const {value } = e.target;
        console.log(e);

        if (value === correctAnswer) {

            alert('This is correct')
            
        }
        else{
            alert('This is not correct')
        }
      };
    
    return (
        <div>
            <div className="question-container">
            <p>{question}</p>
            <div>
                <p><input onChange={valueByClick} type="radio" value={options[0]} name="gender" /> {options[0]}</p>
                <p><input onChange={valueByClick} type="radio" value={options[1]} name="gender" /> {options[1]}</p>
                <p><input onChange={valueByClick} type="radio" value={options[2]} name="gender" /> {options[2]}</p>
                <p><input onChange={valueByClick} type="radio" value={options[3]} name="gender" /> {options[3]}</p>

            </div>
            </div>

            
        </div>
    );
};

export default Question;