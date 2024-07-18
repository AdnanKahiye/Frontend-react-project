// src/Pages/Books.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBooks } from '../Services/bookService';
import Science from '../Images/science.avif';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(data => {
      if (data) setBooks(data);
      else {
        console.error('Failed to fetch books');
        setBooks([]);  // Ensures state is set even in error scenarios
      }
    });
  }, []);

  if (books.length === 0) {
    return <div className="text-center mt-16">No books available.</div>;
  }

  return (
    <div>
      <section className="py-8 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-neutralSilver6 sm:text-4xl">MAANFUR LIBRARY BOOKS ONLINE</h2>
            <p className='pt-2'>Trusted by world library books, read book & improves vocabulary</p>
          </div>

          {/* Reduced top margin for the grid container */}
          <div className="grid grid-cols-1 mt-8 lg:mt-12 gap-y-8 md:grid-cols-3 gap-x-2">
            {books.map(book => (
              <div key={book.id} className="md:px-4 lg:px-10 rounded-lg shadow-md p-6">
                <img className="-rotate-1 shadow-lg" src={book.image} alt="Book cover" style={{ filter: 'brightness(0.9)' }} />
                <h3 className="mt-4 text-xl font-semibold leading-tight text-black">{book.title}</h3>

                <p className="mt-2 text-base text-gray-600">{book.description}</p>
                <Link to={`/books/${book.id}`} className="inline-flex items-center justify-center mt-3 text-base font-semibold text-neutralSilver6 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                  Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Books;
