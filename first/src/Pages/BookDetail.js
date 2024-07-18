// src/Pages/BookDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../Services/bookService';
import detail from '../Images/detail.png'


function BookDetail() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getBookById(id).then(data => {
      if(data) setBook(data);
      else console.error('No book found with id', id);
    });
  }, [id]);

  if (!book) {
    return <div className='mt-16 text-center text-lg font-medium'>Loading...</div>;
  }

  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center pb-16 text-3xl font-bold leading-tight text-neutralSilver6">
            <h1 className="font-semibold">Complete Information on Books</h1>
          </div>
          <div className="grid items-center grid-cols-1 lg:items-stretch md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
            <div className="relative">
              <img className="object-cover w-full h-full" src={book.image} alt="Book Cover" />
            </div>
            <div className="flex flex-col justify-between md:py-0">
              <p className="text-xl font-semibold text-black">Book Name: <span className='text-lg font-light text-gray-600'>{book.title}</span></p>
              <p className="text-xl font-semibold text-black">Author: <span className='text-lg font-light text-gray-600'>{book.author}</span></p>
              <p className="text-xl font-semibold text-black">Year: <span className='text-lg font-light text-gray-600'>{book.year}</span></p>
              <p className="text-xl font-semibold text-black">Pages: <span className='text-lg font-light text-gray-600'>{book.pages}</span></p>
              <p className="text-xl font-semibold text-black">Price: <span className='text-lg font-light text-gray-600'>{book.price}</span></p>
              <blockquote className="mt-4 text-lg font-normal text-gray-600">{book.description}</blockquote>
              <div className="mt-6 lg:mt-auto">
                <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Buy Now
                </button>
                <p className="mt-2 text-base text-gray-600">More read, More earn</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookDetail;
