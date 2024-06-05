import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookshelfPage';
import './App.css'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookSearchPage />} />
                <Route path="/bookshelf" element={<BookshelfPage />} />
            </Routes>
        </Router>
    );
}

export default App;
