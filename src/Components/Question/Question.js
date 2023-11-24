import React from 'react';
import './Question.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({ questions }) => {
    const { question, options, correctAnswer } = questions;


    console.log(questions);

    const valueByClick = (e) => {
        const { value } = e.target;
        console.log(value);

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
                    <p><input onClick={valueByClick} type="radio" value={options[0]} name="gender" /> {options[0]}</p>
                    <p><input onClick={valueByClick} type="radio" value={options[1]} name="gender" /> {options[1]}</p>
                    <p><input onClick={valueByClick} type="radio" value={options[2]} name="gender" /> {options[2]}</p>
                    <p><input onClick={valueByClick} type="radio" value={options[3]} name="gender" /> {options[3]}</p>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
            </div>


        </div>
    );
};

export default Question;