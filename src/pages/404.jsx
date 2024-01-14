// Assets
import horror from '../assets/illustrator/horror.png'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    window.document.title = '404'
    return (
        <div className='min-h-screen flex sm:items-center justify-center bg-slate-900 select-none'>
            <div className="px-4 lg:w-4/5 md:w-11/12 sm:w-full xl:w-9/12 max-sm:mt-28">
                <div className='my-6 flex justify-center'>
                    <Link className='text-gray-200 bg-slate-950 hover:bg-slate-800 py-3 px-6 rounded-md text-xl font-medium group tracking-wide flex items-center gap-3 transition-all' to='/'>
                        <span className='flex items-center gap-3'>
                            <i className="fa-solid fa-arrow-left animate-arrow group-hover:-translate-x-1 transition-all"></i>
                            <span className='group-hover:text-yellow-400 transition-all'>
                                go back 
                            </span>
                        </span>
                        <span className='text-yellow-400 group-hover:text-gray-200 transition-all'>
                            never come again!
                        </span>
                    </Link>
                </div>
                <div className='text-center font-bold tracking-wider animate-bhoo text-pink-600 title-shadow sm:text-7xl text-5xl cursor-not-allowed'>
                    Bhooooooo!!!
                </div>
                <div className='flex items-center justify-center cursor-not-allowed'>
                    <span className='text-gray-300 text-glow animate-scroll sm:text-[250px] text-[180px]'>4</span>
                    <img className='sm:w-64 w-40 aspect-square animate-blob img-glow' src={horror} alt="404 error" />
                    <span className='text-gray-300 text-glow animate-scroll animation-delay-2000 sm:text-[250px] text-[180px]'>4</span>
                </div>
                <div className='flex items-center animate-scroll animation-delay-4000 max-sm:flex-col gap-4 justify-center text-xl cursor-not-allowed'>
                    <span className='font-medium text-purple-600 tracking-wide'>
                        there is no one here
                    </span>
                    <span className='text-gray-100 text-3xl'>
                        <i className="fa-solid fa-angle-left max-sm:hidden"></i>
                        <i className="fa-solid fa-angle-up sm:hidden"></i>
                    </span>
                    <span className='font-medium text-purple-600 text-3xl tracking-wide'>
                        hahaaahahhaaaa
                    </span>
                </div>
            </div>
        </div>
    )
}
