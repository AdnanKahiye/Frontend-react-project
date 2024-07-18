import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Category = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    return (
        <div className='mt-8'>
            <section className="py-10 bg-gray-100 sm:py-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Welcome Admin {auth.user}</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
                            Welcome, Admin! Your role is crucial in maintaining the integrity and efficiency of our platform.
                        </p>
                    </div>

                    <div className="flex justify-end">
                        <button onClick={() => auth.logout(() => navigate('/AddBook'))} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
                            Add new book
                        </button>
                    </div>

                    <div className="overflow-x-auto mt-2">
                        <table className="min-w-full bg-white">
                            <thead className="bg-blue-500 text-white">
                                <tr>
                                    <th className="text-left font-bold uppercase px-4 py-2">ID</th>
                                    <th className="text-left font-bold uppercase px-4 py-2">Book Name</th>
                                    <th className="text-left font-bold uppercase px-4 py-2">Author Name</th>
                                    <th className="text-left font-bold uppercase px-4 py-2">Year</th>
                                    <th className="text-left font-bold uppercase px-4 py-2">Price</th>
                                    <th className="text-left font-bold uppercase px-4 py-2">Page number</th>
                                    <th className="text-left font-bold uppercase px-4 py-2">Description</th>
                                    <th className="text-left font-bold uppercase px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-100">
                                    <td className="px-4 py-2">1</td>
                                    <td className="px-4 py-2">JavaScript Book</td>
                                    <td className="px-4 py-2">Ahmed Jamac</td>
                                    <td className="px-4 py-2">2021</td>
                                    <td className="px-4 py-2">$5</td>
                                    <td className="px-4 py-2">460</td>
                                    <td className="px-4 py-2">Last version of JavaScript</td>
                                    <td className="px-4 py-2">
                                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-2">Edit</button>
                                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Category;
