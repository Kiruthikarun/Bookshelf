import React from 'react';

const Bookshelf = ({ books }) => {
    return (
        <div className="book-results">
            {books.length > 0 ? (
                books.map((book, index) => (
                    <div key={index} className="book-card">
                        <h3>{book.title}</h3>
                        <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
                    </div>
                ))
            ) : (
                <p>No books in your bookshelf.</p>
            )}
        </div>
    );
};

export default Bookshelf;
