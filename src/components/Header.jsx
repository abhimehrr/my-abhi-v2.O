export default function Header({ aboutRef, heroRef, projectRef, contactRef }) {
  const handleScroll = ref => ref.current.scrollIntoView({behavior: "smooth", inline: "end"})

  return (
    <div className="my-2 sticky top-4 z-[9999]">
      <div className="grid items-start justify-center">
        <div className="relative group">
          <header className="relatives sm:px-5 py-2 bg-gray-200 sm:text-md text-lg rounded-full leading-none flex items-center">
            <button onClick={()=>handleScroll(heroRef)} className='py-2 px-5 text-gray-800 hover:bg-gray-300 font-medium transition duration-200 rounded-full'>
              Hero
            </button>
            <button onClick={()=>handleScroll(aboutRef)} className='py-2 px-5 text-gray-800 hover:bg-gray-300 font-medium transition duration-200 rounded-full'>
              About
            </button>
            <button onClick={()=>handleScroll(projectRef)} className='py-2 px-5 text-gray-800 hover:bg-gray-300 font-medium transition duration-200 rounded-full'>
              Project
            </button>
            <button onClick={()=>handleScroll(contactRef)} className='py-2 px-5 text-gray-800 hover:bg-gray-300 font-medium transition duration-200 rounded-full'>
              Contact
            </button>
          </header>
        </div>
      </div>
    </div>
  )
}