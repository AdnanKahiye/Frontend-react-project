import { Link, NavLink } from "react-router-dom";
import '../Styles/Sytyle.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { useState } from 'react'; // Import useState for managing toggle state

const Navbar = () => {
    const auth = useAuth();
    const [isOpen, setIsOpen] = useState(false); // State to manage the menu toggle

    return (
        <div className="fixed top-0 w-full flex flex-wrap justify-between items-center bg-white shadow-md z-10 p-4">
            <div className="text-black text-xl font-bold">Maanfur</div>
            <div className="block lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0zM0 7h20v2H0zM0 11h20v2H0z" />
                    </svg>
                </button>
            </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
                <div className="text-sm lg:flex-grow">
                    <NavLink 
                        to='/' 
                        className={({ isActive }) => 
                            isActive ? "block mt-4 lg:inline-block lg:mt-0 px-4 text-FontColor font-serif active font-medium" : "block mt-4 lg:inline-block lg:mt-0 px-4 text-FontColor font-serif"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to='/About' 
                        className={({ isActive }) => 
                            isActive ? "block mt-4 lg:inline-block lg:mt-0 px-4 font-serif active" : "block mt-4 lg:inline-block lg:mt-0 px-4 font-serif"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to='/ContactUs' 
                        className={({ isActive }) => 
                            isActive ? "block mt-4 lg:inline-block lg:mt-0 px-4 font-serif active" : "block mt-4 lg:inline-block lg:mt-0 px-4 font-serif"
                        }
                    >
                        Contact us
                    </NavLink>
                    <NavLink 
                        to='/Blog' 
                        className={({ isActive }) => 
                            isActive ? "block mt-4 lg:inline-block lg:mt-0 px-4 font-serif active" : "block mt-4 lg:inline-block lg:mt-0 px-4 font-serif"
                        }
                    >
                        Blogs
                    </NavLink>
                    <NavLink 
                        to='/Books' 
                        className={({ isActive }) => 
                            isActive ? "block mt-4 lg:inline-block lg:mt-0 px-4 font-serif active" : "block mt-4 lg:inline-block lg:mt-0 px-4 font-serif"
                        }
                    >
                        Books
                    </NavLink>

                    <NavLink 
                        to='/Category' 
                        className={({ isActive }) => 
                            isActive ? "block mt-4 lg:inline-block lg:mt-0 px-4 font-serif active" : "block mt-4 lg:inline-block lg:mt-0 px-4 font-serif"
                        }
                    >
                        Category
                    </NavLink>

                </div>
                <div>
                    <NavLink 
                        to='/Sign' 
                        className={({ isActive }) => 
                            isActive ? "block mt-4 lg:inline-block lg:mt-0 px-4 text-neutralSilver6 font-serif active" : "block mt-4 lg:inline-block lg:mt-0 px-4 text-neutralSilver6 font-serif"
                        }
                    >
                        Login
                    </NavLink>
                    <NavLink 
                        to='/SignUp' 
                        className={({ isActive }) => 
                            isActive ? "block mt-4 lg:inline-block lg:mt-0 px-4 py-2 text-white font-serif rounded-lg active" : "block mt-4 lg:inline-block lg:mt-0 px-4 py-2 bg-neutralSilver6 text-white font-serif rounded-lg"
                        }
                    >
                        Sign Up
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
