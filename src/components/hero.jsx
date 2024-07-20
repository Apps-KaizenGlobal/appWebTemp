import a1 from '../assets/a1.png';
import a2 from '../assets/a2.png';
import a3 from '../assets/a3.png';

export default function HeroSec() {
    return(
        <section class="bg-[#F2F1F6]">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <a href="#" class="inline-flex justify-between items-center py-1 px-4 pr-4 mb-7 text-sm  rounded-full bg-gray-300 text-black hover:bg-gray-200" role="alert">
                    <span class="text-sm font-medium py-1.5">AI Writer Pro - Elevate Your Writing with AI</span> 
                    {/* <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg> */}
                </a>
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-[#f3782c]">Welcome to AI Writer Pro — The Future of Writing!</h1>
                <p class="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-700">Step into the future of writing with AI Writer Pro, the groundbreaking app designed to elevate your writing experience. Whether you are a student, professional, or content creator, AI Writer Pro combines cutting-edge AI technology with intuitive functionality to help you create high-quality content effortlessly.</p>
                <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    
                    <a href="https://play.google.com/store/apps/details?id=com.aiwriter&pcampaignid=web_share" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border focus:ring-4 text-black border-gray-700 hover:bg-gray-300 focus:ring-gray-800">
                        {/* <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg> */}
                        Download App
                    </a>  
                </div>
                <div className="images flex flex-row gap-x-5 justify-center">
                    <div className='w-3/12'>
                        <img className='mt-12' src={a2} alt="app image 1" />
                    </div>

                    <div className='w-4/12'>
                        <img src={a1} alt="app image 1" />
                    </div>

                    <div className='w-3/12'>
                        <img className='mt-12' src={a3} alt="app image 1" />
                    </div>
                </div>
            </div>
        </section>
    )
}