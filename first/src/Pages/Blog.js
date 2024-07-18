import bookOne from '../Images/book.png'
import blog1 from '../Images/blog1.png'
import blog2 from '../Images/blog2.png'
import blog3 from '../Images/blog3.png'





const Blog =()=>{
    return(
        <div>
            <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-FontColor sm:text-4xl lg:text-5xl">Our <span className="text-neutralSilver6"> blogs</span> </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Welcome to our blog, where we explore the latest books, and insights in software books, education technology of online learning.</p>
        </div>

        <div class="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
            <div>
                <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                    <img class="object-cover w-full h-full" src={blog1} alt="" />
                </a>
                <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> Technology </span>
                <p class="mt-6 text-xl font-semibold">
                    <a href="#" title="" class="text-black"> How to Learn Computer Science at Home in short time ? </a>
                </p>
                <p class="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Muxiyadin . July 22, 2024 </span>
            </div>

            <div>
                <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                    <img class="object-cover w-full h-full" src={blog2} alt="" />
                </a>
                <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Personal development </span>
                <p class="mt-6 text-xl font-semibold">
                    <a href="#" title="" class="text-black">How to Learn Social Science at Home in short time ? </a>
                </p>
                <p class="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Adnan . July 12, 2024 </span>
            </div>

            <div>
                <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                    <img class="object-cover w-full h-full" src={blog3} alt="" />
                </a>
                <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> psychology </span>
                <p class="mt-6 text-xl font-semibold">
                    <a href="#" title="" class="text-black">How to Learn Psychology Books at Home in short time ? </a>
                </p>
                <p class="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Sakariye . July 20, 2024 </span>
            </div>
        </div>
    </div>
</section>

        </div>
    )
}
export default Blog;