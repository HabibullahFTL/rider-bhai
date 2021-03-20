import React from 'react';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column text-danger" style={{height: "70vh"}}>
            <h1 className="bg-light">404</h1>
            <h4>Page Not Found</h4>
        </div>
    );
};

export default NotFound;