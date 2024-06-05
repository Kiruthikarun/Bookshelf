import React from 'react';
import Bookshelf from '../components/Bookshelf';
import { useNavigate } from 'react-router-dom';

const BookshelfPage = () => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    const navigate = useNavigate();

    return (
        <div>
            <h1>My Bookshelf</h1>
            <Bookshelf books={bookshelf} />
            <button onClick={() => navigate('/')}>Back to Search</button>
        </div>
    );
};

export default BookshelfPage;
