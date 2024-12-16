import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Rd'; // Adjust the path based on your folder structure
import RedirectComponent from './components/RedirectComponent'; // If needed for dynamic redirects

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Home page route */}
                <Route path="/" element={<Rd />} />

                {/* Dynamic redirect route */}
                <Route path="/:dynamicValue" element={<RedirectComponent />} />
            </Routes>
        </Router>
    );
};

export default App;
