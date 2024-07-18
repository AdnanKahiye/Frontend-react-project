import React, { useState } from 'react';

const AddBook = () => {
  const [formData, setFormData] = useState({
    id: '',
    bookName: '',
    authorName: '',
    year: '',
    price: '',
    pageNumber: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.id) tempErrors.id = "ID is required";
    if (!formData.bookName) tempErrors.bookName = "Book name is required";
    if (!formData.authorName) tempErrors.authorName = "Author name is required";
    if (!formData.year) tempErrors.year = "Year is required";
    if (!formData.price) tempErrors.price = "Price is required";
    if (!formData.pageNumber) tempErrors.pageNumber = "Page number is required";
    if (!formData.description) tempErrors.description = "Description is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      // Submit form data
    }
  };

  return (
    <div>
      <section className="py-10 bg-gray-100 sm:py-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-neutralSilver6 sm:text-4xl lg:text-5xl mt-4">Fill in the form</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
          </div>
          <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="max-w-4xl w-full p-4 rounded-lg shadow-xl">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID</label>
                  <input
                    type="text"
                    name="id"
                    id="id"
                    value={formData.id}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="1"
                  />
                  {errors.id && <p className="text-red-600 mt-1">{errors.id}</p>}
                </div>
                <div>
                  <label htmlFor="bookName" className="block text-sm font-medium text-gray-700">Book Name</label>
                  <input
                    type="text"
                    name="bookName"
                    id="bookName"
                    value={formData.bookName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="JavaScript Book"
                  />
                  {errors.bookName && <p className="text-red-600 mt-1">{errors.bookName}</p>}
                </div>
                <div>
                  <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">Author Name</label>
                  <input
                    type="text"
                    name="authorName"
                    id="authorName"
                    value={formData.authorName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Ahmed Jamac"
                  />
                  {errors.authorName && <p className="text-red-600 mt-1">{errors.authorName}</p>}
                </div>
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
                  <input
                    type="text"
                    name="year"
                    id="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="2021"
                  />
                  {errors.year && <p className="text-red-600 mt-1">{errors.year}</p>}
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="$5"
                  />
                  {errors.price && <p className="text-red-600 mt-1">{errors.price}</p>}
                </div>
                <div>
                  <label htmlFor="pageNumber" className="block text-sm font-medium text-gray-700">Page Number</label>
                  <input
                    type="text"
                    name="pageNumber"
                    id="pageNumber"
                    value={formData.pageNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="460"
                  />
                  {errors.pageNumber && <p className="text-red-600 mt-1">{errors.pageNumber}</p>}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Last version of JavaScript"
                  />
                  {errors.description && <p className="text-red-600 mt-1">{errors.description}</p>}
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-all duration-150 ease-in-out w-screen">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddBook;
