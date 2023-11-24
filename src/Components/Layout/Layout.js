import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import QuizTopics from '../QuizTopics/QuizTopics';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>            
        </div>
    );
};

export default Layout;