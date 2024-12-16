import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main page of your application.</p>
        </div>
    );
};

const RedirectComponent: React.FC = () => {
    React.useEffect(() => {
        const path = window.location.pathname.split('/').pop();
        if (path) {
            window.location.href = `https://google.com/${path}`;
        }
    }, []);
    return null;
};

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Route for the home page */}
                <Route path="/" element={<Home />} />

                {/* Route for dynamic redirects */}
                <Route path="/:dynamicValue" element={<RedirectComponent />} />
            </Routes>
        </Router>
    );
};

export default App;
