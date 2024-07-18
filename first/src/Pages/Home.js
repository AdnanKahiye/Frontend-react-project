import { useNavigate ,Link,Route,Routes} from 'react-router-dom';
import image from '../Images/online.png'
import Science from '../Images/science.avif';
import Adnan from '../Images/Adnan.jpeg'
import Moha from '../Images/Moha.jpeg'
import Sak from '../Images/Sak.jpg'
import Computer from '../Images/computer.png'
import social from '../Images/social.png'
import sychology from '../Images/sychology.png'
import bookOne from '../Images/book.png'



import BookDetail from '../Pages/BookDetail'



const Home =()=>{
    const navigate = useNavigate(); // Call useNavigate here at the top level
    return(
        <div>  
        <div className="flex flex-col lg:flex-row items-center p-8 my-24 ">
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mt-4">
                    Online library books
                </h1>
                <h2 className="text-4xl font-bold text-neutralSilver6 mb-8">
                    from latest authors
                </h2>
                <p className="text-gray-600 mb-8">
                    Where to grow your business as a photographer: site or social media?
                    Where to grow your business as a photographer: site or social media?

                </p>
                <button onClick={()=>navigate('SignUp')} className="bg-neutralSilver6 text-white py-2 px-12 rounded">
                    Register
                </button>
            </div>
            <div className="lg:w-1/2">
                <img 
                    src={image} 
                    alt="Illustration"
                    className="w-full h-auto"
                />
            </div>
        </div>
        <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-end justify-between">
            <div class="flex-1 text-center lg:text-left">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Popular Categrory Books</h2>
                <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Discover our diverse collection of popular books, featuring thrilling mysteries, epic fantasies, enlightening non-fictionn tales for every reader.</p>
            </div>

            <div class="hidden lg:flex lg:items-center lg:space-x-3">
                <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-5">
                    <div class="relative">
                        <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                            <img class="object-cover w-full h-full" src={Computer} alt="" />
                        </a>

                        <div class="absolute top-4 left-4">
                            <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Lifestyle </span>
                        </div>
                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> Computer Science </span>
                    <p class="mt-5 text-2xl font-semibold">
                        <a href="#" title="" class="text-black"> How to Learn Computer Science at Home in short time. </a>
                    </p>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <Link to="/Books"  class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-neutralSilver6 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    Go to library
                    </Link>
                </div>
            </div>


            
            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-5">
                    <div class="relative">
                        <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                            <img class="object-cover w-full h-full" src={ social}></img> 

                        </a>

                        <div class="absolute top-4 left-4">
                            <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Lifestyle </span>
                        </div>
                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> Social  books </span>
                    <p class="mt-5 text-2xl font-semibold">
                        <a href="#" title="" class="text-black"> How to Learn Social Science at Home in short time. </a>
                    </p>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <Link to="/Books"  class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-neutralSilver6 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    Go to library
                    </Link>
                </div>
            </div>


            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-5">
                    <div class="relative">
                        <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                            <img class="object-cover w-full h-full" src={ sychology}></img> 

                        </a>

                        <div class="absolute top-4 left-4">
                            <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Lifestyle </span>
                        </div>
                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> Social  books </span>
                    <p class="mt-5 text-2xl font-semibold">
                        <a href="#" title="" class="text-black"> How to Learn Social Science at Home in short time. </a>
                    </p>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <Link to="/Books"  class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-neutralSilver6 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    Go to library
                    </Link>
                </div>
            </div>


            
            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-5">
                    <div class="relative">
                        <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                            <img class="object-cover w-full h-full" src={ social}></img> 

                        </a>

                        <div class="absolute top-4 left-4">
                            <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Lifestyle </span>
                        </div>
                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> Social  books </span>
                    <p class="mt-5 text-2xl font-semibold">
                        <a href="#" title="" class="text-black"> How to Learn Social Science at Home in short time. </a>
                    </p>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <Link to="/Books"  class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-neutralSilver6 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    Go to library
                    </Link>
                </div>
            </div>


            


            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-5">
                    <div class="relative">
                        <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                            <img class="object-cover w-full h-full" src={ bookOne}></img> 

                        </a>

                        <div class="absolute top-4 left-4">
                            <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Lifestyle </span>
                        </div>
                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> Social  books </span>
                    <p class="mt-5 text-2xl font-semibold">
                        <a href="#" title="" class="text-black"> How to Learn Social Science at Home in short time. </a>
                    </p>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <Link to="/Books"  class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-neutralSilver6 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    Go to library
                    </Link>
                </div>
            </div>





            

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-5">
                    <div class="relative">
                        <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                            <img class="object-cover w-full h-full" src={Science} alt="" />
                        </a>

                        <div class="absolute top-4 left-4">
                            <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Productivity </span>
                        </div>
                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> Psychology Book </span>
                    <p class="mt-5 text-2xl font-semibold">
                        <a href="#" title="" class="text-black"> How to Learn Psychology Books at Home in short time </a>
                    </p>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <Link to="/Books"  class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-neutralSilver6 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    Go to library
                    </Link>
                </div>
            </div>
        </div>



        






        

        <div class="flex items-center justify-center mt-8 space-x-3 lg:hidden">
            <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</section>

<Routes>
    <Route path='BookDetail' element ={<BookDetail/>}/>
</Routes>
















<section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">Our <span class="text-green-500">team</span> Leaders for the this plattform</h2>
        </div>

        <div class="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            <div class="overflow-hidden bg-white rounded-md shadow">
                <div class="px-8 py-12">
                    <div class="relative w-24 h-24 mx-auto">
                        <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src={Adnan} alt="" />
                        <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="mt-7">
                        <p class="text-lg text-black">Eng Adnan is a manager of maanfur, he is developer with a strong background in computer science to building  user-friendly applications.</p>
                    </blockquote>
                    <p class="text-base font-semibold tex-tblack mt-9">Adnan Said</p>
                    <p class="mt-1 text-base text-gray-600">Project Manager</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md shadow">
                <div class="px-8 py-12">
                    <div class="relative w-24 h-24 mx-auto">
                        <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src={Sak} alt="" />
                        <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="mt-7">
                        <p class="text-lg text-black"> Eng Sakariye is an innovative developer with a strong background in computer science to building  user-friendly applications.</p>
                    </blockquote>
                    <p class="text-base font-semibold tex-tblack mt-9">Sakariye</p>
                    <p class="mt-1 text-base text-gray-600">Founder at Maanfur.co</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md shadow">
                <div class="px-8 py-12">
                    <div class="relative w-24 h-24 mx-auto">
                        <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src={Moha} alt="" />
                        <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="mt-7">
                        <p class="text-lg text-black">Software engineer Eng Mohiyadiin is an innovative developer with a strong background in computer science to building  user-friendly applications.</p>
                    </blockquote>
                    <p class="text-base font-semibold tex-tblack mt-9">Mohiyadiin</p>
                    <p class="mt-1 text-base text-gray-600">Software Engineer</p>
                </div>
            </div>
        </div>
    </div>
</section>





<section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">What our some customers say</h2>
            <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div class="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
            <div class="overflow-hidden bg-white rounded-md">
                <div class="px-5 py-6">
                    <div class="flex items-center justify-between">
                        <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg" alt="" />
                        <div class="min-w-0 ml-3 mr-auto">
                            <p class="text-base font-semibold text-black truncate">Fadumo Ahmed</p>
                            <p class="text-sm text-gray-600 truncate">@Fatima</p>
                        </div>
                        <a href="#" title="" class="inline-block text-sky-500">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <blockquote class="mt-5">
                        <p class="text-base text-gray-800">
                            You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.
                            <span class="block text-sky-500">#Thank you</span>
                        </p>
                    </blockquote>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
                <div class="px-5 py-6">
                    <div class="flex items-center justify-between">
                        <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg" alt="" />
                        <div class="min-w-0 ml-3 mr-auto">
                            <p class="text-base font-semibold text-black truncate">Ahmed Faarax</p>
                            <p class="text-sm text-gray-600 truncate">@farax</p>
                        </div>
                        <a href="#" title="" class="inline-block text-sky-500">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <blockquote class="mt-5">
                        <p class="text-base text-gray-800">

                        You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.                            <span class="block text-sky-500">#Celebration</span>
                        </p>
                    </blockquote>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
                <div class="px-5 py-6">
                    <div class="flex items-center justify-between">
                        <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg" alt="" />
                        <div class="min-w-0 ml-3 mr-auto">
                            <p class="text-base font-semibold text-black truncate">Abdirahman </p>
                            <p class="text-sm text-gray-600 truncate">@Manka</p>
                        </div>
                        <a href="#" title="" class="inline-block text-sky-500">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <blockquote class="mt-5">
                        <p class="text-base text-gray-800">
                        You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.                            <span class="block text-sky-500">#make_it_fast</span>
                        </p>
                    </blockquote>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
                <div class="px-5 py-6">
                    <div class="flex items-center justify-between">
                        <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg" alt="" />
                        <div class="min-w-0 ml-3 mr-auto">
                            <p class="text-base font-semibold text-black truncate">Guuleed</p>
                            <p class="text-sm text-gray-600 truncate">@Guled</p>
                        </div>
                        <a href="#" title="" class="inline-block text-sky-500">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <blockquote class="mt-5">
                        <p class="text-base text-gray-800">
                        You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.                            <span class="block text-sky-500">#Celebration</span>
                        </p>
                    </blockquote>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
                <div class="px-5 py-6">
                    <div class="flex items-center justify-between">
                        <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-5.jpg" alt="" />
                        <div class="min-w-0 ml-3 mr-auto">
                            <p class="text-base font-semibold text-black truncate">Hamdi</p>
                            <p class="text-sm text-gray-600 truncate">@hamdi</p>
                        </div>
                        <a href="#" title="" class="inline-block text-sky-500">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <blockquote class="mt-5">
                        <p class="text-base text-gray-800">
                        You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.                            <span class="block text-sky-500">#make_it_fast</span>
                        </p>
                    </blockquote>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
                <div class="px-5 py-6">
                    <div class="flex items-center justify-between">
                        <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-6.jpg" alt="" />
                        <div class="min-w-0 ml-3 mr-auto">
                            <p class="text-base font-semibold text-black truncate">Burhan</p>
                            <p class="text-sm text-gray-600 truncate">@burhan</p>
                        </div>
                        <a href="#" title="" class="inline-block text-sky-500">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <blockquote class="mt-5">
                        <p class="text-base text-gray-800">
                        You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.                            <span class="block text-sky-500">#dev #tools</span>
                        </p>
                    </blockquote>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
                <div class="px-5 py-6">
                    <div class="flex items-center justify-between">
                        <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-7.jpg" alt="" />
                        <div class="min-w-0 ml-3 mr-auto">
                            <p class="text-base font-semibold text-black truncate">Nune</p>
                            <p class="text-sm text-gray-600 truncate">@nune</p>
                        </div>
                        <a href="#" title="" class="inline-block text-sky-500">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <blockquote class="mt-5">
                        <p class="text-base text-gray-800">
                        You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.                            <span class="block text-sky-500">#another</span>
                        </p>
                    </blockquote>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
                <div class="px-5 py-6">
                    <div class="flex items-center justify-between">
                        <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-8.jpg" alt="" />
                        <div class="min-w-0 ml-3 mr-auto">
                            <p class="text-base font-semibold text-black truncate">Kaamil</p>
                            <p class="text-sm text-gray-600 truncate">@kamil</p>
                        </div>
                        <a href="#" title="" class="inline-block text-sky-500">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <blockquote class="mt-5">
                        <p class="text-base text-gray-800">
                        You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.                            <span class="block text-sky-500">#Celebration</span>
                        </p>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</section>






<section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-neutralSilver6 sm:text-4xl lg:text-5xl">Contact us</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-black">We welcome you with open arms and are happy to answer any questions you may have..</p>
        </div>

        <div class="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div class="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                <div class="overflow-hidden bg-white rounded-xl">
                    <div class="p-6">
                        <svg class="flex-shrink-0 w-10 h-10 mx-auto text-neutralSilver6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <p class="mt-6 text-lg font-medium text-gray-900">+252 6266666</p>
                        <p class="mt-1 text-lg font-medium text-gray-900">+252 90 6547</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded-xl">
                    <div class="p-6">
                        <svg class="flex-shrink-0 w-10 h-10 mx-auto text-neutralSilver6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p class="mt-6 text-lg font-medium text-gray-900">manfur@example.com</p>
                        <p class="mt-1 text-lg font-medium text-gray-900">adnan@example.com</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded-xl">
                    <div class="p-6">
                        <svg class="flex-shrink-0 w-10 h-10 mx-auto text-neutralSilver6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p class="mt-6 text-lg font-medium leading-relaxed text-gray-900">KM4 Banadir Mall. Hodan, Moqadisho, Somalia</p>
                    </div>
                </div>
            </div>

            <div class="mt-6 overflow-hidden bg-white rounded-xl">
                <div class="px-6 py-12 sm:p-12">
                    <h3 class="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>

                    <form action="#" method="POST" class="mt-14">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Your name </label>
                                <div class="mt-2.5 relative">
                                    <input type="text" name="" id="" placeholder="Enter your full name" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                                <div class="mt-2.5 relative">
                                    <input type="email" name="" id="" placeholder="Enter your full name" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Phone number </label>
                                <div class="mt-2.5 relative">
                                    <input type="tel" name="" id="" placeholder="Enter your full name" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Company name </label>
                                <div class="mt-2.5 relative">
                                    <input type="text" name="" id="" placeholder="Enter your full name" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="" class="text-base font-medium text-gray-900"> Message </label>
                                <div class="mt-2.5 relative">
                                    <textarea name="" id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600" rows="4"></textarea>
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-neutralSilver6 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>



        </div>
    )
}
export default Home;