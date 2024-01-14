import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectViewHeader() {
  const [scrollButton, setScrollButton] = useState(false)

  window.addEventListener('scroll', e => {
    if(window.scrollY > 300) setScrollButton(true)
    else setScrollButton(false)
  })

  return (
    <>
    <header className={`bg-slate-900 py-4 rounded-b-lg`}>
      <nav className="flex flex-col">
        <Link
         className="text-4xl hidden text-gray-400 max-sm:text-2xl font-bold tracking-wide hover:tracking-wider cursor-pointer transition-all"
         to={'/'}
         >
          Project View
        </Link>
        {/* <div className="relative">
          <div className='w-full h-full absolute bg-pink-600 blur inset-0 max-sm:opacity-40 opacity-80'></div>
          <Link to='/' className="relative text-xl max-sm:text-lg tracking-wide bg-gray-800 bg-gradient-to-brs hover:bg-gradient-to-bl from-purple-700 to-pink-600 text-gray-100 px-8 py-1 rounded-full font-semibold transition-all">
            Home
          </Link>
        </div> */}
        <button onClick={()=>window.history.back()} className='text-gray-300 hover:text-gray-200 font-semibold my-4 flex items-center gap-2 group rounded-r-lg transition-all'>
          <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-all"></i>
          Back to List
        </button>
        <div className="w-full h-[1px] bg-gray-400"></div>
      </nav>
    </header>
    {scrollButton &&
    <button onClick={()=>window.scrollTo({ top: '0', behavior: 'smooth' })} className="w-10 h-10 flex justify-center items-center fixed bottom-4 right-4 bg-purple-600 text-gray-100 hover:bg-purple-700 z-20 group transition-all rounded">
      <i className="fa-solid fa-angles-up text-xl group-hover:-translate-y-1 transition-all"></i>
    </button>
    }
    </>
  )
}
