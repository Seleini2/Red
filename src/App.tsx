import React, { useEffect } from 'react';

const RedirectComponent: React.FC = () => {
    useEffect(() => {
        // Get the last part of the current URL path
        const path = window.location.pathname.split('/').pop();

        if (path) {
            // Redirect to Google with the dynamic path value
            window.location.href = `https://yiport.com/${path}`;
        }
    }, []);

    return null; // No UI is needed
};

export default RedirectComponent;
