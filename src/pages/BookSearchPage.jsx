import React, { useState } from 'react';
import BookSearch from '../components/BookSearch';
import { useNavigate } from 'react-router-dom';
import './BookSearchPage.css'; 
const BookSearchPage = () => {
    const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);
    const navigate = useNavigate();

    const addToBookshelf = (book) => {
        const updatedBookshelf = [...bookshelf, book];
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };

    return (
        <div className="book-search-page">
            <button className="bookshelf-button" onClick={() => navigate('/bookshelf')}>My Bookshelf</button>
            <BookSearch onAddToBookshelf={addToBookshelf} />
        </div>
    );
};

export default BookSearchPage;
