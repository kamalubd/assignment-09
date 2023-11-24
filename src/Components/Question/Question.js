import React from 'react';
import './Question.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEye } from '@fortawesome/free-solid-svg-icons'



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
                <div className='title-div'>
                <p className='question-title'>{question}</p>
                <p className='eyeicon'><FontAwesomeIcon icon={faEye}/></p>
                </div>
                <div className='answers'>
                <p><input onClick={valueByClick} type="radio" value={options[0]} name="option" /> {options[0]}</p>
                    <p><input onClick={valueByClick} type="radio" value={options[1]} name="option" /> {options[1]}</p>
                    <p><input onClick={valueByClick} type="radio" value={options[2]} name="option" /> {options[2]}</p>
                    <p><input onClick={valueByClick} type="radio" value={options[3]} name="option" /> {options[3]}</p>                
                    
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
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