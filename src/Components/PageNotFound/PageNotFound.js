import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h1>Ooops!! Page Not Found</h1>
            <p>Please Return to <Link to='/'>Home Page</Link></p>
        </div>
    );
};

export default PageNotFound;