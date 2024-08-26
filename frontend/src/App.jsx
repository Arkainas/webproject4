import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Privacy from './Pages/Privacy';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />
            </Routes>
        </Router>
    );
}

export default App;
