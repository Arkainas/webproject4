
import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Privacy from './Pages/Privacy';
import Home from "./Pages/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
        </Router>
    );
}

export default App;
