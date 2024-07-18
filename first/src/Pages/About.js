import { useNavigate } from 'react-router-dom';
import image from '../Images/about1.png';

const About = () => {
    const navigate = useNavigate(); // Call useNavigate here at the top level

    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
                    <div>
                        <img className="w-full max-w-md mx-auto" src={image} alt="About Us" />
                    </div>

                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Maanfur books online shop</h2>
                        <p className="mt-6 text-base text-gray-600">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>

                        <button
                            onClick={() => navigate('/')}
                            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-neutralSilver6 rounded-md mt-9 hover:bg-blue-700 focus:bg-blue-700"
                            role="button"
                        >
                            Go to back
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
