import React, { useState } from 'react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        location: '',
        password: '',
        books: '',
        gender: ''
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
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
        if (!formData.location) tempErrors.location = "Location is required";
        if (!formData.password) tempErrors.password = "Password is required";
        if (!formData.books) tempErrors.books = "Please select a book";
        if (!formData.gender) tempErrors.gender = "Please select a gender";
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
            <section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="col-span-2 flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <div className="xl:w-full xl:max-w-3xl 2xl:max-w-4xl xl:mx-auto">
                            <h2 className="text-3xl font-bold leading-tight text-neutralSilver6 sm:text-4xl">Sign up to Celebration</h2>
                            <p className="mt-2 text-base text-gray-600">Already have an account? <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Sign in</a></p>

                            <form onSubmit={handleSubmit} className="mt-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="text-base font-medium text-gray-900"> Name </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                            {errors.name && <p className="text-red-600 mt-1">{errors.name}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="text-base font-medium text-gray-900"> Email address </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                            {errors.email && <p className="text-red-600 mt-1">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="location" className="text-base font-medium text-gray-900"> Location </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="location"
                                                id="location"
                                                placeholder="Enter your location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                            {errors.location && <p className="text-red-600 mt-1">{errors.location}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="text-base font-medium text-gray-900"> Password </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="Enter your password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                            {errors.password && <p className="text-red-600 mt-1">{errors.password}</p>}
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <label htmlFor="books" className="text-base font-medium text-gray-900"> Select a Book </label>
                                        <div className="mt-2.5">
                                            <select
                                                name="books"
                                                id="books"
                                                value={formData.books}
                                                onChange={handleChange}
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            >
                                                <option value="">Select a book</option>
                                                <option value="book1">Book 1</option>
                                                <option value="book2">Book 2</option>
                                                <option value="book3">Book 3</option>
                                            </select>
                                            {errors.books && <p className="text-red-600 mt-1">{errors.books}</p>}
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <label htmlFor="gender" className="text-base font-medium text-gray-900"> Gender </label>
                                        <div className="mt-2.5 space-x-4">
                                            <div className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    id="male"
                                                    value="male"
                                                    checked={formData.gender === 'male'}
                                                    onChange={handleChange}
                                                    className="mr-2"
                                                />
                                                <label htmlFor="male" className="text-base font-medium text-gray-900">Male</label>
                                            </div>
                                            <div className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    id="female"
                                                    value="female"
                                                    checked={formData.gender === 'female'}
                                                    onChange={handleChange}
                                                    className="mr-2"
                                                />
                                                <label htmlFor="female" className="text-base font-medium text-gray-900">Female</label>
                                            </div>
                                            {errors.gender && <p className="text-red-600 mt-1">{errors.gender}</p>}
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Sign up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
                        <div>
                            <img className="w-full mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/1/cards.png" alt="" />

                            <div className="w-full max-w-md mx-auto xl:max-w-xl">
                                <h3 className="text-2xl font-bold text-center text-black">Design your own card</h3>
                                <p className="leading-relaxed text-center text-gray-500 mt-2.5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>

                                <div className="flex items-center justify-center mt-10 space-x-3">
                                    <div className="bg-neutralSilver6 rounded-full w-20 h-1.5"></div>

                                    <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>

                                    <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
