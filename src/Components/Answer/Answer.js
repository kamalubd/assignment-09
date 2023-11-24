import React from 'react';

const Answer = (option) => {

    const answer = option.option;
    return (
        <div>

<p><input type="radio" value={answer} name="" /> {answer}</p>
            
        </div>
    );
};

export default Answer;