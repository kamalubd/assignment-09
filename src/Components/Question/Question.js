import React from 'react';
import './Question.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuizAnswers from '../QuizAnswers/QuizAnswers';


const Question = ({ questions}) => {
    const { question, options, correctAnswer } = questions;

    // console.log(questions);
    
    const valueByClick = (e) => {
        const { value } = e.target;

        if (value === correctAnswer) {
            toast('Bravo!! Your Answer is Correct!')
        }
        else {
            toast('Oh!!! This Answer is Wrong. Try Again')
        }
    };

    return (
        <div>
            <div className="question-container">
                <p>{question}</p>
                <div>
                {/* <p><input onClick={valueByClick} type="radio" value={options[0]} name="option-1" /> {options[0]}</p>
                    <p><input onClick={valueByClick} type="radio" value={options[1]} name="option-2" /> {options[1]}</p>
                    <p><input onClick={valueByClick} type="radio" value={options[2]} name="option-3" /> {options[2]}</p>
                    <p><input onClick={valueByClick} type="radio" value={options[3]} name="option-4" /> {options[3]}</p> */}

                    <QuizAnswers options={options}></QuizAnswers>
                    
                </div>
                {/* <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" /> */}
            </div>


        </div>
    );
};

export default Question;