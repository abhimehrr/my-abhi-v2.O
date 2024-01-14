import React, { useEffect, useState } from 'react'

// Assests
import developer from '../../assets/illustrator/developer.svg'

// Temp Data
// import About from '../../assets/data/about'

export default function Skills () {
  const [About, setAbout] = useState(null)

  useEffect(() => {
    fetch('https://abhi.shre.in/assets/data/about.json')
    .then(res => res.json())
    .then(res => setAbout(res))
  }, [])

  return (
    <div className='px-4 pb-8'>
      <div className='relative text-4xl min-h-screen min-w-full flex items-center justify-center flex-col sm:text-6xl font-bold tracking-wider text-gray-100'>
        <div className="absolute sm:w-96 w-72 sm:h-96 h-72 opacity-40 blur-3xl rounded-full bg-pink-500"></div>
        <div className="relative w-5/6 max-sm:w-full">
          <img className='object-cover' src={developer} alt="developer" />
        </div>
      </div>
      <h2 className='text-2xl font-medium tracking-wider text-gray-400'>
        About me
      </h2>
      <div className='w-full sm:w-3/4 sm:my-10 my-2 mx-auto px-4 text-gray-200 text-2xl text-center tracking-wide'>
        {About?.about}
      </div>
      <div className="mt-10">
        <h2 className='text-2xl font-medium tracking-wider text-gray-400'>Skills</h2>
        {About?.skills.map((skill, i) => (
          <div key={skill.title} className={`my-10 px-4 flex gap-4 flex-col sm:flex-row`}>
            <div className="w-full sm:w-3/4 flex items-center flex-wrap gap-2 text-gray-200 bg-gray-400s">
              {skill.tools.map(tool => (
                <button key={tool.name} className={`flex items-center justify-center gap-3 border ${i % 2 === 0 ? 'border-purple-400 hover:bg-purple-400' : 'border-pink-400 hover:bg-pink-400'} hover:scale-105 tracking-wide py-2 px-4 transition-all rounded-md`}>
                  <img className='w-8 aspect-square bg-white p-0.5 rounded object-cover' src={tool.icon} alt={''} />
                  {tool.name}
                </button>
              ))}
            </div>
            <div className={`w-1/4 ${i % 2 !== 0 ? 'text-pink-500' : 'text-purple-500'}  text-2xl tracking-wider font-bold`}>
              <div className="flex items-center gap-3">
                {skill.title}
                <i className={`text-gray-200 ${skill.icon}`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}