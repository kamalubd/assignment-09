import React from 'react';
import './Blog.css'

const Blogs = () => {
    return (
        <div className='blog-container'>
           <div className='single-div'>
            <h2>What is the Puspose of React Router?</h2>
            <p>Answer: React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.</p>
           </div>
           <div className='single-div'>
            <h2>How does Context Api works?</h2>
            <p>Answer: Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components.</p>

           </div>
           <div className='single-div'>
            <h2>How useRef Hook works?</h2>
            <p>Answer: useRef is a React Hook that lets you reference a value that’s not needed for rendering. useRef accepts one argument as the initial value and returns a reference.</p>

           </div>
        </div>
    );
};

export default Blogs;